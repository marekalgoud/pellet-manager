<template>
  <div class="flex flex-col h-screen">
    <header class="bg-white w-full z-10 top-0 shadow py-2 px-4 flex justify-between items-center">
      <nuxt-link to="/" class="flex items-center">
        <img src="@/assets/logo.svg" alt="" width="40">Pellet Manager
      </nuxt-link>

      <Button @click.native="logout()">
        Déconnexion
      </Button>
    </header>
    <div class="flex justify-center items-center flex-grow">
      <Nuxt />
    </div>
    <footer class="bg-white w-full z-10 top-0 shadow py-2 px-4 flex justify-between items-center">
      <div class="flex-grow text-center">
        <nuxt-link to="/">
          Ajouter
        </nuxt-link>
      </div>
      <div class="flex-grow text-center">
        <nuxt-link to="/rapport">
          Rapport
        </nuxt-link>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$fire.auth.signOut()
      this.$router.push('/login')
    }
  },
  head: {
    bodyAttrs: {
      class: 'bg-gray-100 font-sans leading-normal tracking-normal'
    }
  }
}
</script>
