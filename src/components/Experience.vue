<template>
  <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
    <div class="px-4 ml-4 pt-4">
      <form action="#" class="flex flex-col space-y-8">

        <div>
          <h3 class="text-2xl border-b-2 border-white font-semibold">Education</h3>
          <hr>
        </div>

        <div class="container mx-auto ">
          <a target="_blank" href="https://www.fpmoz.sum.ba" class="relative w-5/6 mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
            <div  class="z-0 order-1 md:order-2 relative w-full ml-2.5 md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
              <div class="mx-auto inset-0 w-full h-full object-fit bg-blue-400 bg-opacity-30 bg-contain bg-bottom bg-center bg-cover bg-no-repeat" :style="{backgroundImage: 'url(../src/assets/sum.png)'}"></div>
            </div>
            <div class="z-10 order-2 text-white md:order-1 w-full h-full md:w-3/5 flex items-center">
              <div class="min-w-full bg-indigo-500 p-8 md:pr-18 md:pl-14 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 inline-block m-2 bi bi-building" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                    </svg>
                    <label class="text inline-block">University</label>
                    <input type="text" value="University of Mostar" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 inline-block m-2 bi bi-laptop-fill" viewBox="0 0 16 16">
                      <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                    </svg>
                    <label class="text inline-block">Field of Study</label>
                    <input type="text" value="Computer Science" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <label class="text inline-block">City</label>
                    <input type="text" value="Mostar" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <label class="text inline-block">Country</label>
                    <input type="text" value="Bosnia & Herzegovina" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                    <label class="text inline-block">Finshed</label>
                    <input type="text" value="February 2022." class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <label class="text inline-block">Title acquired</label>
                    <input type="text" value="Master of Computer Science" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>
                </div>
              </div>
              <div class="text-sm absolute bottom-1 left-6">
                <span class="text-white">Visit: <div class="inline-block underline">https://www.fpmoz.sum.ba</div></span>
              </div>
            </div>
          </a>
        </div>

        <div class="container mx-auto ">
          <a target="_blank" href="https://www.fpmoz.sum.ba" class="relative w-5/6 mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
            <div  class="z-0 order-1 md:order-2 relative w-full ml-2.5 md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
              <div class="mx-auto inset-0 w-full h-full object-fit  bg-blue-400 bg-opacity-30 bg-cover bg-bottom bg-center bg-contain bg-no-repeat" :style="{backgroundImage: 'url(../src/assets/sum.png)'}"></div>
            </div>
            <div class="z-10 order-2 text-white md:order-1 w-full h-full md:w-3/5 flex items-center">
              <div class="min-w-full bg-blue-500 p-8 md:pr-18 md:pl-14 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 inline-block m-2 bi bi-building" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                    </svg>
                    <label class="text inline-block">University</label>
                    <input type="text" value="University of Mostar" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 inline-block m-2 bi bi-laptop-fill" viewBox="0 0 16 16">
                      <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                    </svg>
                    <label class="text inline-block">Field of Study</label>
                    <input type="text" value="Computer Science" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <label class="text inline-block">City</label>
                    <input type="text" value="Mostar" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <label class="text inline-block">Country</label>
                    <input type="text" value="Bosnia & Herzegovina" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                    <label class="text inline-block">Finshed</label>
                    <input type="text" value="October 2019." class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <label class="text inline-block">Title acquired</label>
                    <input type="text" value="Bachelor of Computer Science" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>
                </div>
              </div>
              <div class="text-sm absolute bottom-1 left-6">
                <span class="text-white">Visit: <div class="inline-block underline">https://www.fpmoz.sum.ba</div></span>
              </div>
            </div>
          </a>
        </div>
        <div>
          <h3 class="text-2xl border-b-2 border-white font-semibold">Work Expirience</h3>
          <hr>
        </div>

        <div class="container mx-auto ">
          <a target="_blank" href="https://www.qsdbih.com" class="relative w-4/6 mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
            <div  class="z-0 order-1 relative w-full ml-2.5 md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
              <div class="mx-auto inset-0 w-full h-full object-fit rounded-xl bg-green-400 bg-opacity-30 bg-cover bg-bottom bg-center bg-contain bg-no-repeat" :style="{backgroundImage: 'url(../src/assets/qsd.png)'}"></div>
            </div>
            <div class="z-10 order-2 text-white md:order-1 w-full h-full md:w-3/5 flex items-center">
              <div class="min-w-full bg-green-500 p-8 md:pr-18 md:pl-14 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 inline-block m-2 bi bi-building" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                    </svg>
                    <label class="text inline-block">Company</label>
                    <input type="text" value="QSD" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 inline-block m-2 bi bi-laptop-fill" viewBox="0 0 16 16">
                      <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                    </svg>
                    <label class="text inline-block">Position</label>
                    <input type="text" value="Backend Developer" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <label class="text inline-block">City</label>
                    <input type="text" value="Mostar" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <label class="text inline-block">Country</label>
                    <input type="text" value="Bosnia & Herzegovina" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                    <label class="text inline-block">From</label>
                    <input type="text" value="May 2021." class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <label class="text inline-block">To</label>
                    <input type="text" value="Current" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>
                </div>
              </div>
              <div class="text-sm absolute bottom-1 right-6">
                <span class="text-white">Visit: <div class="inline-block underline">https://www.qsdbih.com</div></span>
              </div>
            </div>
          </a>
        </div>
        <div class="container mx-auto ">
          <a href="#" class="relative w-4/6 mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
            <div  class="z-0 order-1 relative w-full ml-2.5 md:w-2/5 h-64 md:h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
              <div class="mx-auto inset-0 md:w-full h-full object-fit rounded-xl bg-blue-500  bg-contain bg-bottom bg-center bg-cover bg-no-repeat" :style="{backgroundImage: 'url(../src/assets/portrait.jpg)'}"></div>
            </div>
            <div class="z-10 order-2 text-white md:order-1 w-full h-full md:w-3/5 flex items-center">
              <div class="min-w-full bg-blue-900 p-8 md:pr-18 md:pl-14 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                    <label class="text inline-block">Self-employed</label>
                    <input type="text" value="Freelancer" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 inline-block m-2 bi bi-laptop-fill" viewBox="0 0 16 16">
                      <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                    </svg>
                    <label class="text inline-block">Position</label>
                    <input type="text" value="Full-Stack Web Developer" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <label class="text inline-block">City</label>
                    <input type="text" value="Mostar (Remote)" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>
                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <label class="text inline-block">Country</label>
                    <input type="text" value="Bosnia & Herzegovina" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " disabled>
                  </div>
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                    <label class="text inline-block">From</label>
                    <input type="text" value="February 2019." class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>

                  <div class="form-item w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <label class="text inline-block">To</label>
                    <input type="text" value="Current" class="w-full appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
                  </div>
                </div>
              </div>
            </div>
          </a>
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

</style>
