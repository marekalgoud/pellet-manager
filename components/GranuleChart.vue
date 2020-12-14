<template>
  <Chart v-if="chartData" :chart-data="chartData" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: true
    },
    snapshot: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      chartData: null
    }
  },

  watch: {
    type () {
      this.updateData()
    }
  },

  mounted () {
    this.updateData()
  },

  methods: {
    updateData () {
      const labels = []
      const data = []

      const format = {
        day: 'DD/MM',
        week: 'ww',
        month: 'MMM'
      }

      for (let i = this.start; i <= this.end; i = this.$dayjs(i).add('1', this.type).valueOf()) {
        labels.push(this.$dayjs(i).format(format[this.type]))
        data.push(this.snapshot.docs.filter((c) => {
          const start = this.$dayjs(i).subtract('1', this.type).valueOf()
          const current = c.data().date
          return current >= start && current <= i
        }).length)
      }
      this.chartData = {
        labels,
        datasets: [
          {
            label: 'Sacs de granule',
            backgroundColor: '#2b6cb0',
            data
          }
        ]
      }
    }
  }
}
</script>
