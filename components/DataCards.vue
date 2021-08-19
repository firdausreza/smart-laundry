<template>
  <div class="wrapper flex flex-col p-8 bg-lightblue rounded-xl">
    <h1 class="text-3xl">
      {{ title }}
    </h1>
    <h3 class="text-5xl text-green-300 mt-8">
      Rp {{ nominal }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    nominal: {
      type: Number,
      default: 0
    }
  }
}
</script>
