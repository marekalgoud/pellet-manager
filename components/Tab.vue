<template>
  <button
    class="text-xs text-gray-800 py-4 px-2 block hover:text-blue-500 focus:outline-none border-b-2 font-medium"
    :class="{'border-blue-500': active}"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
