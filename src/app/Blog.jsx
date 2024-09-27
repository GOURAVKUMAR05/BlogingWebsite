
"use client"
import React, { useContext, useEffect, useState } from 'react'

import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from './FirebaseConfig';
// import { app } from '../FirebaseConfig';

export default function Blog() {

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
        <div>
            <section className='my-14 pt-10'>
                <div className='py-3 w-[1320px] mx-auto'>
                    <div className='grid grid-cols-3 '>

                        {
                            user.length > 0

                                ?


                                user.map((items, index) => {
                                    return (
                                        <div className='w-[380px] h-[300px]  text-justify text-sm rounded-sm p-4 text-wrap flex justify-around flex-col justify blogshadow mb-10'>

                                            <h1 className='text-xl capitalize  font-bold'>{items.uheading}</h1>
                                            <p>{items.udescription}</p>
                                            <h1>1 minute ago</h1>
                                        </div>
                                    )
                                })


                                :

                                <td colSpan={3}>data not found</td>

                        }

                        {/* <h1 className='text-xl capitalize  font-bold'>Hello</h1>
                            <p>good morning</p>
                            <h1>1 minute ago</h1> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
