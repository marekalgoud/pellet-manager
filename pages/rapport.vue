<template>
  <div class="w-full p-4">
    <div>
      <h1 class="text-3xl font-extrabold text-blue-900 tracking-tight">
        Résumé
      </h1>
      <div class="ml-4">
        <span class="text-xs text-gray-800">Cette semaine : {{ week }}</span>
      </div>
      <div class="ml-4">
        <span class="text-xs text-gray-800">Ce mois : {{ month }}</span>
      </div>
      <div class="ml-4">
        <span class="text-xs text-gray-800">Cet année : {{ year }}</span>
      </div>
    </div>

    <div class="flex justify-center my-4 -mx-4">
      <Tab :active="type == 'day'" @click.native="type = 'day'">
        12 derniers jours
      </Tab>
      <Tab :active="type == 'week'" @click.native="type = 'week'">
        12 dernières semaines
      </Tab>
      <Tab :active="type == 'month'" @click.native="type = 'month'">
        12 derniers mois
      </Tab>
    </div>
    <GranuleChart v-if="start && end && snapshot" :type="type" :start="start" :end="end" :snapshot="snapshot" />
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data () {
    return {
      week: null,
      month: null,
      year: null,
      collection: this.$fire.firestore.collection('granules'),
      type: 'day',
      start: null,
      end: null,
      snapshot: null
    }
  },

  watch: {
    async type (val) {
      try {
        this.start = this.$dayjs().subtract(12, val).startOf(val).valueOf()
        this.end = this.$dayjs().valueOf()
        console.log(this.type, this.$dayjs(this.start).format('DD/MM/YYYY'), this.$dayjs(this.end).format('DD/MM/YYYY'))
        this.snapshot = await this.collection.where('date', '>', this.start).where('date', '<', this.end).get()
        console.log('test', this.snapshot.docs)
      } catch (e) {
        console.error(e)
      }
    }
  },

  async mounted () {
    // week
    try {
      const weekStart = this.$dayjs().startOf('w').valueOf()
      const weekEnd = this.$dayjs().endOf('w').valueOf()
      const weekDoc = await this.collection.where('date', '>', weekStart).where('date', '<', weekEnd).get()
      this.week = weekDoc.size
    } catch (e) {
      console.error(e)
    }
    // month
    try {
      const monthStart = this.$dayjs().startOf('M').valueOf()
      const monthEnd = this.$dayjs().endOf('M').valueOf()
      const monthDoc = await this.collection.where('date', '>', monthStart).where('date', '<', monthEnd).get()
      this.month = monthDoc.size
    } catch (e) {
      console.error(e)
    }

    // year
    try {
      const yearStart = this.$dayjs().startOf('y').valueOf()
      const yearEnd = this.$dayjs().endOf('y').valueOf()
      const yearDoc = await this.collection.where('date', '>', yearStart).where('date', '<', yearEnd).get()
      this.year = yearDoc.size
    } catch (e) {
      console.error(e)
    }

    // 10 last days
    try {
      this.start = this.$dayjs().subtract(12, this.type).valueOf()
      this.end = this.$dayjs().valueOf()
      this.snapshot = await this.collection.where('date', '>', this.start).where('date', '<', this.end).get()
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
