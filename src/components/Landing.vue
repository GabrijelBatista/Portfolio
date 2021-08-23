<template>
  <div class="h-screen flex items-center bg-cover w-screen bg-hero-lg justify-center">
    <div class="text-white text-center justify-center content-center flex text-2xl bg-black bg-opacity-50 h-screen w-full font-serif italic">
      <div class="text-lg md:text-xl top-10 left-10 w-5/6 md:w-1/3 md:top-40 md:left-60 font-serif italic absolute text-white">
        Hi, my name is Gabrijel and I'm a Full-stack Web Developer with master's degree in Computer Science. While studying in college I had the opportunity to get acquainted with many different technologies and I decided that I want to build a career as a web developer...
      </div>
      <div class="absolute transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 top-1/2 left-1/4 md:top-2/3 lg:top-1/2">
        <router-link class="flex text-lg font-serif italic" @click="passEvent" to="/basic-information"><div class="py-2 text-white rounded-xl bg-blue-800 px-4">More about me</div></router-link>
      </div>
      <img class="h-1/3 md:h-1/2 absolute right-16 bottom-0" src="/src/assets/portrait2.png">
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    passEvent()
    {
      this.$emit('continue', true)
    }
  },
  created(){
      this.$emit('continue', false)
  }
}
</script>

<style>

</style>