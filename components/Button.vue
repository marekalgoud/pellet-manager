<template>
  <button class="flex rounded-full bg-blue-700 text-white py-2 pl-6 pr-3">
    <span class="mr-3">
      <slot />
    </span>
    <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#ffffff"
        stroke-width="5"
        r="45"
        stroke-dasharray="202.63272615654165 69.54424205218055"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
