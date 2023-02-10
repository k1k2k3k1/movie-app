import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { addDoc } from 'firebase/firestore'
//import { async } from '@firebase/util';
import { moviesRef } from './fairebase/Firebase';
import sweetAlert from 'sweetalert';
const Addmovie = () => {
  const [form, setForm] = useState({
    name: " ",
    year: " ",
    description: " ",
    img: " ",
    rated: 0,
    rating: 0
  });
  const [loading, setLoading] = useState(false);
  const addMovie = async () => {
    try { setLoading(true);
      console.log(form);
    await addDoc(moviesRef,form);
    sweetAlert({
      title: "Succefully Added",
      icon: "succes",
      buttons: false,
      timer: 3000

    })
    
  } catch(err){
    sweetAlert({
      title: err,
      icon: "error",
      buttons: false,
      timer: 3000

    })
    }
    setLoading(false);
  }

  
  return (
    <div>
      <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-100">Add Movie</h1>
      
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" 
            class="leading-7 text-sm text-gray-600">name</label>
            <input type="text" 
             id="name" 
             name="name" 
             value={form.title}
                    onChange={(e) => setForm({...form, name: e.target.value})}
            class="w-full bg-gray-100 bg-opacity-50 rounded border
             border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
              focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
              leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Year</label>
            <input type="email"
             id="email"
              name="email"
              value={form.year}
                    onChange={(e) => setForm({...form, year: e.target.value})}
               class="w-full
             bg-gray-100 bg-opacity-50 rounded border border-gray-300
              focus:border-indigo-500 focus:bg-white focus:ring-2
               focus:ring-indigo-200 text-base outline-none
                text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">img</label>
            <textarea id="message"
             name="message"
             value={form.img}
                    onChange={(e) => setForm({...form, img: e.target.value})}
              class="w-full
             bg-gray-100 bg-opacity-50 rounded border border-gray-300
              focus:border-indigo-500 focus:bg-white focus:ring-2
               focus:ring-indigo-200 h-17 text-base outline-none
                text-gray-700 py-1 px-3 resize-none leading-6 transition-colors 
                duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">description</label>
            <textarea id="message"
             name="message"
             value={form.description}
                    onChange={(e) => setForm({...form, description: e.target.value})}
              class="w-full
             bg-gray-100 bg-opacity-50 rounded border border-gray-300
              focus:border-indigo-500 focus:bg-white focus:ring-2
               focus:ring-indigo-200 h-32 text-base outline-none
                text-gray-700 py-1 px-3 resize-none leading-6 transition-colors 
                duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button onClick={addMovie} class="flex mx-auto text-white
           bg-indigo-500 border-0 py-2 px-8 focus:outline-none
            hover:bg-indigo-600 rounded text-lg">
              {loading ? <TailSpin height={25} color="white"/> : "Submit" }</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500">dollyvivek@email.com</a>
         
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Addmovie
