<template>
  <div class="sm:w-full sm:relative sm:h-auto md:w-300 md:h-full fixed m-0 p-0 flex flex-col bg-darkblack text-center">
    <h1 class="text-2xl font-bold mt-8">
      SmartLaundry
    </h1>
    <nuxt-link to="/" :class="`${handler === 'Beranda' ? 'bg-lightblue' : ''} block p-8 mt-16`">
      <span class="text-lg">Beranda</span>
    </nuxt-link>
    <nuxt-link to="/pembukuan" :class="`${handler === 'Pembukuan' ? 'bg-lightblue' : ''} block p-8`">
      <span class="text-lg">Pembukuan</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    handler: {
      type: String,
      default: 'Beranda'
    }
  }
}
</script>
