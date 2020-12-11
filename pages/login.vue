<template>
  <div class="container px-6">
    <form @submit="submitHandle">
      <div class="mb-4">
        <Input
          id="email"
          v-model="formData.email"
          label="Email"
          placeholder="Email"
          type="email"
        />
      </div>
      <div class="mb-4">
        <Input
          id="password"
          v-model="formData.password"
          label="Mot de passe"
          placeholder="Mot de passe"
          type="password"
        />
      </div>
      <Button type="submit" :loading="loading">
        S'authentifier
      </Button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {

  data () {
    return {
      loading: false,
      formData: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions({
      login: 'login'
    }),
    async submitHandle (e) {
      this.loading = true
      e.preventDefault()
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
        this.login()
        this.$router.push('/')
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
