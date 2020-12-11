<template>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :value="value"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :placeholder="placeholder"
      :type="type"
      @input="handleInput"
    >
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      content: this.value
    }
  },

  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
