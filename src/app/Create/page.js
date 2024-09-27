"use client"
import { getDatabase, ref, set, onValue } from "firebase/database";
import React, { Children, createContext, useEffect, useState } from 'react'
import { app } from '../FirebaseConfig'

// export let showDataContext=createContext()


export default function Create() {

  let [user, setUser] = useState([])

  // console.log(user)

  let userObj = { user, setUser };

  // console.log(userObj.user)

  const db = getDatabase(app);
  let uniqueCode = String((new Date().getTime()));

  // console.log(uniqueCode)

  let handleForm = (event) => {

    // console.log(event);
    event.preventDefault();


    let uheading = event.target.uheading.value;
    let udescription = event.target.udescription.value;
    let object = { uheading, udescription }

    console.log(object);

    set(ref(db, 'createBlog/' + uniqueCode), object)

    event.target.reset();

    // console.log(object)
  }

 
  // console.log(userObj.user)


  return (
    //  <showDataContext.Provider value={userObj}>
    <div className='w-full  	 text-2xl mx-auto px-2  md:max-w-[1400px] '>
      <div className="lg:mx-auto rounded-lg p-4 px-2 my-8 createshadow" >
        <form onSubmit={handleForm}>
          <label for="heading" className="block my-4 md:text-lg text-sm font-medium text-gray-900"  >Heading</label>

          <input type="text" name='uheading' rows="4" className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." />

          <label for="desciption" className="block my-4 text-sm md:text-lg font-medium text-gray-900"  >Description</label>
          <textarea name='udescription' className="block min-h-[300px] mt-4 p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here...">
          </textarea>
          <div className="text-center">
            <button type="submit" className="transform  w-[40%] rounded-md mt-10  bg-[black] text-white py-2 font-bold duration-300 hover:bg-[#4B0082] ">Add Blog</button>
          </div>
        </form>
      </div>
    </div>
    //  </showDataContext.Provider>
  )
}
