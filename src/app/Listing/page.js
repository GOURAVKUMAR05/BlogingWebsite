"use client"

import React, { useContext, useEffect, useState } from 'react'
// import { showDataContext } from '../Create/page'
// import { loginContext } from '../Root'
import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from '../FirebaseConfig';


export default function Listing() {
    // let { user, setUser } = useContext(showDataContext)
    let [user, setUser] = useState([])

    // console.log(user.length)
    const db = getDatabase(app);
    let getEnquiryData = () => {

        const enquirytRef = ref(db, 'createBlog/');
        onValue(enquirytRef, (enquireRes) => {
            const data = enquireRes.val();

            //   console.log(data)

            let userData = []

            for (let key in data) {

                userData.push(data[key])
            }

            setUser(userData)
            //   console.log(userData)

        })

    }
    useEffect(() => {
        getEnquiryData();
    }, [])

    return (
        <div className=''>
            <div className=''>
                <div className=''>
                    <div className="relative  shadow-md sm:rounded-lg overflow-x-auto my-14 mx-auto w-full px-4 md:max-w-[1400px]">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto border-collapse ">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">Title</th>
                                    <th className="px-4 py-2 text-left">Description</th>
                                    <th className="px-4 py-2">Edit</th>
                                </tr>
                            </thead>

                            {/* <tbody>
                                <tr className="bg-gray-100">
                                    <td className="border px-4 py-2">dfgdgdf</td>
                                    <td className="border px-4 py-2">kmjdsnjkgsn</td>
                                    <td className="border px-4 py-2">
                                        <button className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">Edit</button>
                                    </td>
                                </tr>
                            </tbody> */}

                            {  
                                user.length > 0

                                    ?


                                    user.map((items, index) => {
                                      return(  <tbody>
                                            <tr className="bg-gray-100">
                                                <td className="border px-4 py-2">{items.uheading}</td>
                                                <td className="border px-4 py-2">{items.udescription}</td>
                                                <td className="border px-4 py-2">
                                                    <button className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">Edit</button>
                                                </td>
                                            </tr>
                                        </tbody>)
                                    })


                                    :

                                    <td colSpan={3}>data not found</td>

                            }

                        </table>
                    </div>
                </div>
            </div>

            <img className="w-full h-[50vh]" src="https://firebase-two-ebon.vercel.app/img/16.jpg" alt=""></img>
        </div>
    )
}