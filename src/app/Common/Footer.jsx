import React from 'react'

export default function Footer() {
  return (
    <div>
          <section className='backgroundnav'>
            <div className='py-3 w-[1320px] mx-auto flex text-wrap  justify-center flex-col items-center text-white'>
                <div className='flex flex-col pt-8 mb-2 items-center gap-10'>
                    <h1 className=' text-4xl font-bold "'>Publish your passions, your way</h1>
                    <p className=' text-xl'>Create a unique and beautiful blog easily.</p>
                    <a href="">
                    <button className='bg-[#ff8000] rounded-sm uppercase font-bold text-xs md:text-sm p-2'>Create Your Blog</button>
                    </a>
                    <div className='md:text-xs text-[10px]	 leading-10  my-4 text-center'>
                        <i>
                            <span className='text-2xl index-module_type__E-SaG'>Discover storytelling through our captivating </span>
                        </i>
                    </div>
                </div>
            </div>
            <div className='container shadow-lg border-t border-[black]'>
                        <div className=' flex justify-between px-10 mx-auto max-w-[1400px] text-xl py-2  text-center h-[70px] items-center text-white'>
                            <div>
                                Blog-
                                <span className='text-[red]'>st</span>
                            </div>
                            <div>Stay Connected with Blogst</div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-3xl cursor-pointer animate-bounce" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"></path></svg>
                        </div>
                    </div>
        </section>
    </div>
  )
}
