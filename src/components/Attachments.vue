<template>
  <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
    <div class="px-4 ml-4 pt-4">
      <div>
        <h3 class="text-2xl border-b-2 border-white font-semibold">Attachments</h3>
        <hr>
      </div>
        <div class="container text-center p-6 mx-auto">
          <div @click="expand=true; active='bachelor.jpg'" class="pt-6 pb-2 w-72 md:w-96 transition cursor-pointer duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg bg-gray-800">
            <img src="/src/assets/bachelor.jpg" class="border-indigo-500 border-2 w-64 md:w-80 mx-auto" alt="">
            <div class="text-xl md:text-3xl text-white font-serif font-extrabold font-italic mx-auto my-4">Bachelor's degree</div>
          </div>
        </div>
    </div>
    <transition name="fade"  mode="out-in">
      <div v-show="expand" class="fixed z-50 top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-gray-700 bg-opacity-90 flex flex-col items-center justify-center">
        <button @click="expand=false"><svg xmlns="http://www.w3.org/2000/svg" class="right-0 transition cursor-pointer duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 top-0 mt-2 mr-2 absolute h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg></button>
        <button @click="download_image"><svg xmlns="http://www.w3.org/2000/svg" class="right-14 transition cursor-pointer duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-white top-0 mt-2 mr-2 absolute h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg></button>
        <div class="flex container p-2 mx-auto items-center justify-center">
          <div>
            <img class="object-scale-down inline-block m-auto h-screen" :src="'/src/assets/'+active">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default{
  data: function() {
    return{
      expand: false,
      active: null
    }
  },
  methods: {
    download_image(){
      this.$axios.get('http://localhost:3000/src/assets/'+this.active, { responseType: 'blob' })
          .then(response => {
            const blob = new Blob([response.data], { type: 'application/pdf' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = this.active
            link.click()
            URL.revokeObjectURL(link.href)
          }).catch(console.error)
    }
  },
  created(){
    this.$emit('continue', true)
  }
}
</script>

<style>

</style>