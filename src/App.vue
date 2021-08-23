<template>
  <div class="w-full relative shadow-2xl rounded overflow-hidden">
    <transition name="slide-fade" mode="out-in">
    <div v-if="show" class="top h-96 w-full bg-blue-600 overflow-hidden relative" >
      <img src="/src/assets/universe.jpeg" alt="" class=" w-full h-full object-cover object-center absolute z-0">
      <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
        <img src="/src/assets/portrait.jpg" class="h-24 w-24 lg:w-32 lg:h-32 object-cover rounded-full" alt="">
        <h1 class="text-2xl font-semibold">Gabrijel Batista</h1>
        <h4 class="text-sm font-semibold">Full Stack Web Developer</h4>
      </div>
    </div>
    </transition>
    <transition name="slide-fade" mode="out-in">
    <div class="grid grid-cols-12 -ml-4 md:-ml-0 bg-gray-300 ">

      <div v-if="show" class="col-span-12 w-full border-b-2 border-white px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 flex-col md:col-span-2 md:justify-start ">
        <div></div>
        <router-link to="/basic-information" active-class="bg-indigo-900" class="text-sm mb-1 p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Basic Information</router-link>
        <router-link to="/education-and-experience" active-class="bg-indigo-900" class="text-sm mb-1 p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Education & Work Experience</router-link>
        <router-link to="/projects" active-class="bg-indigo-900" class="text-sm p-2 mb-1 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Skills & Projects</router-link>
        <router-link to="/attachments" active-class="bg-indigo-900" class="text-sm p-2 mb-1 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Attachments</router-link>
        <div @click="download_resume" class="transition cursor-pointer duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-blue-700 hover:underline text-sm pt-4 text-center ">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-1 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download resume</span>
        </div>
      </div>
      <router-view @continue="go($event)" v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      show: false
    }
  },
  methods: {
    download_resume() {
      this.$axios.get('http://localhost:3000/src/assets/resume.pdf', {responseType: 'blob'})
          .then(response => {
            const blob = new Blob([response.data], {type: 'application/pdf'})
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = 'GabrijelBatista.pdf'
            link.click()
            URL.revokeObjectURL(link.href)
          }).catch(console.error)
    },
    go(e)
    {
      this.show=e;
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
