import React from 'react'
import bg from '@/Img/bg_1.jpg';
import {Link } from '@inertiajs/react';
import lady from '@/Img/lady-2.png'
import students from '@/Img/students.png'
import phonemockup from '@/Img/phonemock.png'
import {BiDollarCircle} from 'react-icons/bi';

const Hero = () => {
  return (
    <div className={`min-h bg-cover bg-no-repeat bg-center relative text-slate-100`} style={{backgroundImage: `url(${bg})`}}>
        <div className={`bg-primary bg-opacity-70  px-4 bg-gradient-to-b from-[#000000ec] dark:from-[#000000da] via-[#000000b9] to-[#000000b9] dark:to-[#000000d5]  text-primar`}>
            <div className='max-w-6xl mx-auto relative'>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center justify-center text-center md:text-left mb-10 mt-8">
                        <aside className='pt-12'>
                            <div className={`flex justify-center items-center md:justify-start gap-2 text-sm mb-3`}>
                                <Link href="" className={`px-2 py-1 inline-flex items-center md:mx-0 rounded-xl bg-white bg-opacity-10 text-slate-300 font-medium`}>
                                    Welcome to Federal Polytechnic, Nekede
                                </Link>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-black mb-4 uppercase" >
                               Department of <span className="text-primary">computer</span> Engineering
                            </h1>
                            <p className="text-sm mb-5">
                                Welcome to the vibrant hub of innovation and excellence – the Computer Engineering Department!
                                As a pioneering force in the realm of technology, our department is committed to shaping the
                                future through cutting-edge research, 
                                transformative education, and a passion for pushing the boundaries of what's possible.
                            </p>
                            <div className={`md:flex gap-3 mb-10 md:mb-28`}>
                                <a  href='https://fpno.edu.ng/' target='_blank' className={`py-3 px-5 mx-2 md:mx-0 rounded-3xl transition-all duration-100 bg-primary hover:bg-secondary text-white font-bold`}>
                                   see school site
                                </a>
                                <Link  className={`py-3 px-5 mx-2 md:mx-0 rounded-3xl border border-primary bg-black bg-opacity-50 text-white hover:bg-black font-bold`}>
                                    Create Account
                                </Link>
                            </div>
                        </aside>
                    </div>
                    <div className="">
                        {/* <img src={lady} alt="student image" className="" /> */}
                        <img src={students} alt="student image" className="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero