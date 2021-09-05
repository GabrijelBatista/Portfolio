<template>
  <div class="h-screen flex items-center w-screen bg-gradient-to-r mx-auto from-gray-900 via-green-900 to-indigo-900 justify-center">
    <div class="text-white text-center text-2xl bg-black bg-opacity-50 h-screen w-screen font-serif italic">
      <router-link @click="passEvent" to="/basic-information">
        <img class="h-1/4 cursor-pointer lg:h-1/3 rounded-full bg-gradient-to-r from-red-900 via-indigo-900 mb-5 to-yellow-900 border-2 md:absolute md:right-20 mt-5 mx-auto md:top-1/3 lg:top-1/4" src="/src/assets/card_portrait.png">
      </router-link>
      <div class="md:absolute mx-auto md:top-1/3 md:w-1/3 w-5/6 md:left-1/4 ">
        <div class="text-lg md:text-lg mx-auto mb-10 md:mb-20 md:text-xl font-serif italic text-white">
          Hi, my name is Gabrijel and I'm a Full-stack Web Developer with master's degree in Computer Science. While studying in college I had the opportunity to get acquainted with many different technologies and I decided that I want to build a career as a web developer...
        </div>
        <div class="w-48 transition mx-auto duration-500 mx-auto ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <router-link class=" text-lg mx-auto font-serif italic" @click="passEvent" to="/basic-information">
            <div class="py-2 text-white border-2 rounded-xl text-transparent animate-pulse bg-gradient-to-tr from-teal-400 to-teal-800 px-4">
              More about me
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 inline-block ml-2 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
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