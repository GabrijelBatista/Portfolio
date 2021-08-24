<template>
      <div class="col-span-12 text-white md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
        <div class="px-4 ml-4 pt-4">
          <form action="#" class="flex flex-col space-y-8">

            <div>
              <h3 class="text-2xl border-white border-b-2 font-semibold">Basic Information</h3>
              <hr>
            </div>

            <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
              <div class="form-item w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block text-green-500 mx-2 mb-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
                <label class="text-xl inline-block">First Name</label>
                <input type="text" value="Gabrijel" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
              </div>

            <div class="form-item w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block text-green-500 mx-2 mb-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <label class="text-xl inline-block">Last Name</label>
              <input type="text" value="Batista" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
            </div>
            </div>
            <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

              <div class="form-item w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block text-blue-500 mx-2 mb-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <label class="text-xl inline-block">Phone</label>
                <input type="text" value="+38763919765" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
              </div>

              <div class="form-item w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block text-blue-500 mx-2 mb-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <label class="text-xl inline-block">Email</label>
                <input type="text" value="batista_gabrijel1@hotmail.com" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
              </div>
            </div>
            <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
              <div class="form-item w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block text-red-500 mx-2 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <label class="text-xl inline-block">City</label>
                <input type="text" value="Mostar" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
              </div>
              <div class="form-item w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block text-red-500 mx-2 mb-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <label class="text-xl inline-block">Country</label>
                <input type="text" value="Bosnia & Herzegovina" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
              </div>
            </div>
            <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
              <div class="form-item w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block text-yellow-500 mx-2 mb-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <label class="text-xl inline-block">Date of Birth</label>
                <input type="text" value="6. March 1997." class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
              </div>
              <div class="form-item w-full">
                <img src="/src/assets/croatia.png" class="h-6 w-6 inline-block mx-2 mb-3" alt="">
                <label class="text-xl inline-block">Nationality</label>
                <input type="text" value="Croatian" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
              </div>
            </div>

            <div>
              <h3 class="text-2xl border-white border-b-2 font-semibold">My Social Media</h3>
              <hr>
            </div>

            <div class="form-item">
              <img src="/src/assets/linkedin.png" class="h-6 w-6 inline-block mx-2 mb-3" alt="">
              <label class="text-xl inline-block">LinkedIn</label>
              <br/>
              <a href="https://www.linkedin.com/in/gabrijel-batista1997" target="_blank" class="text-blue-100 ml-4 hover:underline hover:text-blue-400">https://www.linkedin.com/in/gabrijel-batista1997</a>
            </div>
            <div class="form-item">
              <img src="/src/assets/github.png" class="h-6 w-6 inline-block mx-2 mb-3" alt="">
              <label class="text-xl inline-block">GitHub</label>
              <br/>
              <a href="https://github.com/GabrijelBatista" target="_blank" class="text-blue-100 ml-4 hover:underline hover:text-blue-400">https://github.com/GabrijelBatista</a>
            </div>
            <div class="form-item">
              <img src="/src/assets/stackoverflow.png" class="h-6 w-6 inline-block mx-2 mb-3" alt="">
              <label class="text-xl ">Stack Overflow</label>
              <br/>
              <a href="https://stackoverflow.com/users/13450559/gabrijel-batista" target="_blank" class="text-blue-100 ml-4 hover:underline hover:text-blue-400">https://stackoverflow.com/users/13450559/gabrijel-batista</a>
            </div>
            <div class="form-item">
              <img src="/src/assets/facebook.png" class="h-6 w-6 inline-block mx-2 mb-3" alt="">
              <label class="text-xl inline-block">Facebook</label>
              <br/>
              <a href="https://www.facebook.com/profile.php?id=100006246165850" target="_blank" class="text-blue-100 ml-4 hover:underline hover:text-blue-400">https://www.facebook.com/profile.php?id=100006246165850</a>
            </div>
          </form>
        </div>
      </div>
</template>

<script>
export default{
  created(){
    this.$emit('continue', true)
  }
}
</script>

<style scoped>
.text-indent{
  text-indent: 40px;
}
</style>
