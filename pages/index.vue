<template>
  <div class="container">
    <div class="flex flex-col items-center">
      <form @submit="submitHandle">
        <!-- <div class="mb-4">
          <Input v-model="date" label="Le" type="text" placeholder="" />
        </div> -->
        <datetime v-model="date" type="datetime" input-class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <div class="relative my-4 flex justify-center w-full pb-12">
          <Button type="submit" :loading="loading" :disabled="loading">
            Ajouter un sac
          </Button>
          <p v-if="success" class="absolute bottom-0 left-0 w-full text-center text-green-800 font-medium">
            Sac ajouté !
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  middleware: ['auth'],
  data () {
    return {
      collection: this.$fire.firestore.collection('granules'),
      date: new Date().toISOString(),
      loading: false,
      success: false
    }
  },

  computed: {
    timestamp () {
      return Date.parse(this.date)
    }
  },

  methods: {
    async submitHandle (e) {
      this.success = false
      this.loading = true
      e.preventDefault()
      const docRef = this.collection.doc()
      try {
        await docRef.set({ date: this.timestamp })
        this.success = true
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
