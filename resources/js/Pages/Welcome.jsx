import { Link, Head } from '@inertiajs/react';
import BaseLayout from '@/Layouts/BaseLayout';
import Hero from '@/Components/Hero';
import hod from '@/Img/director.jpg'
import { useState } from 'react';
import bg from '@/Img/bg_1.jpg';
import comRoom from '@/Img/computer_room.jpg'
import ndFull from '@/Img/nd_full.jpg'
import ndPart from '@/Img/nd_part.jpeg'
import hndPart from '@/Img/hnd_part.jpg'
import hndFull from '@/Img/hnd_full.jpg'
import {IoIosHome, IoMdInformationCircle, IoIosHeadset, IoIosLogIn, IoIosPersonAdd} from 'react-icons/io';
import { FaUserTie } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
export default function Welcome({ auth, laravelVersion, phpVersion }) {

    const [ID, setID] = useState(1);

    const toggleID = ID=>setID(ID)
    return (
        <BaseLayout>
            <Head title="Welcome" />
            <Hero />

            {/* HOD welcome note start */}
            <section className='py-20  overflow-hidden'>
                <div className='max-w-6xl mx-auto relative'>
                    <div className="flex gap-x-10">
                      
                        <div className='w-1/4'  data-aos="fade-right" data-aos-duration="1000">
                            <div className='px-4 py-3 bg-primary'>
                                <div className='mb-1'>
                                    <img src={hod} alt="" className='block w-full border-[3px] border-white rounded-md'/>
                                </div>
                                <div className='text-center text-white'>
                                    <h3 className='text-xl font-normal'>FPNO CTE 4th HOD</h3>
                                    <p className=''>Engr. Uchenna Peter, FNSE.</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-2/3'>
                            <div data-aos="fade-left" data-aos-duration="1000" className=''>
                                <h2 className='text-2xl font-normal'>Welcome note from the</h2>
                                <h2 className='text-2xl font-bold mb-4'> HOD of Computer Engineering Department</h2>
                                <p  data-aos="fade-right" data-aos-duration="1000" >
                                    With great pleasure, I welcome you to the Department of Computer Engineering, 
                                    The Federal Polytechnic Nekede, Imo State, Nigeria. 
                                    The Department has the vision of being the best department of 
                                    Computer Engineering among Nigerian Polytechnics and world-acclaimed where 
                                    the frontier of Engineering and Technology is constantly advancing and professional 
                                    Engineers are produced for the industrialization and development of Nigeria and the world at large.
                                    Thank you for your interest in the Department of Computer Engineering and I wish 
                                    you great success in your career and academic pursuit in this great field of Engineering.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* HOD welcome note end */}

            {/* Section Overview Start */}
            <section className='py-20 bg-[#f8f8f8] relative'>
                <div className='max-w-6xl mx-auto relative'>
                    <div className="flex">

                      
                        <div className='w-2/3'>
                            <div className='relative pr-5'>
                                <div  className={`${ID== 1 ? 'h-[312px] block': 'h-0 hidden'} transition-all duration-100 w-full`}>
                                    <div className=''>
                                        <h2 className='uppercase font-black text-primary text-3xl mb-3'>Objectives</h2>
                                        <p className='mb-3'>
                                            The educational mission of the computer engineering program is to graduate students who 
                                            have fundamental technical knowledge of their profession and the requisite technical breadth
                                            and communications skills to become leaders in creating the new techniques 
                                            and technologies which will advance the general field of computer engineering.
                                        </p>
                                        <p className='mb-3 font-semibold'>
                                            Graduates of the Computer Engineering programs will achieve the following objectives;
                                        </p>
                                        <p className='mb-3'>
                                            They will be technically qualified for practice in the profession. 
                                            They will demonstrate the ability to specify, design, and implement software 
                                            and or hardware-software systems to meet customer requirements or to advance the state of the art. 
                                            The ability to employ modern computer languages, environments, and platforms in such tasks 
                                            and the ability to apply knowledge of science and mathematics to such tasks.
                                        </p>

                                        <div className='hidden'>
                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>

                                            <div className='mb-4 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    We provide 100% profit guarantee. All investments are fully secured.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div  className={`${ID== 2 ? 'h-[540px] block': 'h-0 hidden'} transition-all duration-100 w-full`}>
                                    <div className=''>
                                        <h2 className='uppercase font-black text-primary text-3xl mb-3'>Career in computer engineering</h2>
                                        
                                        <p className='mb-3'>
                                            Due to the rapid growth of information technology, the computer industry has become one of
                                            the fastest-growing segments of our economy. Computers can be found everywhere; ATMs,
                                            touching every facet of our lives. As a result, 
                                            there exists a huge demand for computers, new communication systems and software.
                                        </p>

                                        <p className='mb-3'>
                                            A computer engineering graduate with a high percentage of marks and good communication skills
                                            is easily absorbed into reputed companies. 
                                            Software and IT companies are the main employers of graduates.
                                        </p>

                                        <p className='mb-3'>
                                            They can also find job opportunities in a variety of environments in universities, 
                                            research, private and public industries, government departments, business organizations, 
                                            commercial organizations and the manufacturing sector etc. computer Engineers can work as software /hardware Engineers,
                                            which are the two main sectors in the computer industry.
                                        </p>

                                        <p className='mb-3'>
                                            They can work as programmers, web developers and E-commerce specialists with industries that
                                            build or use computer-based systems, such as telecommunications, automotive, aerospace, etc.
                                            National and multi-national computer manufacturing companies; computer hardware system design and 
                                            development companies, computer networking companies, software development companies as well as
                                            hardware assembling and maintenance companies, data processing departments of modern industries 
                                            and in areas where computers and computer-aided systems are used. Such as aeronautics and space science,
                                            the petroleum industry, chemical plants and power plants 
                                            and management consultancy organizations are some of the probable workplaces.
                                        </p>
                                    </div>
                                </div>

                                <div  className={`${ID== 3 ? 'h-[504px] block': 'h-0 hidden'} transition-all duration-100 w-full`}>
                                    <div className=''>
                                        <h2 className='uppercase font-black text-primary text-3xl mb-3'>Computer engineers</h2>
                                        
                                        <p className='mb-3'>
                                            They will be successful as graduates either through professional employment in 
                                            the private or public sector or as students in graduate study. They will also be able
                                            to employ life–long learning tools and 
                                            techniques to maintain their currency in the field.
                                        </p>

                                        <div className=''>
                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Improve internet security to help protect your information and make it safer to buy things online.
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    2
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Design faster processors to help make HDTV and 3D TV watching and video gaming experience better.
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    3
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    develop biomedical systems to help monitor patients in hospitals.
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    4
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Implement sensor networks to help make robots more human-like.
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    5
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Create the smart power grid to help manage energy distribution to households across the country.
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    6
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Work with digital forensics to help police and FBI track and catch cybercriminals.
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    7
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Installation configuration and troubleshooting of computers
                                                </p>
                                            </div>

                                            <div className='flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    8
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Design of computer-based systems using microprocessors and microcontrollers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={`${ID== 4 ? 'h-[456px] block': 'h-0 hidden'} transition-all duration-100 w-full`}>
                                    <div className=''>
                                        <h2 className='uppercase font-black text-primary text-3xl mb-3'>Career Opportunities</h2>
                                        
                                        <p className='mb-3'>
                                            They will be successful as graduates either through professional employment in 
                                            the private or public sector or as students in graduate study. They will also be able
                                            to employ life–long learning tools and 
                                            techniques to maintain their currency in the field.
                                        </p>

                                        <div className=''>
                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    1
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Software engineers
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    2
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Lecturing/TECHNOLOGISTs
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    3
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Programmers
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    4
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Software and hardware maintenance engineers
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    5
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Telecommunication industries
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    6
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Banks as software engineers
                                                </p>
                                            </div>

                                            <div className='mb-3 flex flex-col md:flex-row gap-x-3 items-start md:items-center'>
                                                <div className='h-7 w-7 md:h-9 md:w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
                                                    7
                                                </div>
                                                <p className='flex-shrink-0 text-sm md:text-base'>
                                                    Industries to maintain and design controls using Microprocessors
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/3'>
                            <div className='bg-[#ededed] py-11 px-8 rounded-md border-2 border-primary'>
                                <ul className=''>
                                    <li className=''>
                                        <Link href="contact-us" className={`inline-block w-full transition-all duration-100 border-2 border-primary ${ID ==1? 'bg-[#f8f8f8]': 'bg-[#ebebeb]'}  hover:bg-[#dcdcdc] rounded-sm py-4 px-5 mb-5`}  onClick={(e)=>{e.preventDefault(),toggleID(1)}}>
                                            <IoMdInformationCircle className='text-base  inline-block mr-1'/>
                                            Objectives
                                        </Link>
                                    </li>

                                    <li className='mt-[2px]'>
                                        <Link href="contact-us" className={`inline-block w-full transition-all duration-100 border-2 border-primary ${ID ==2? 'bg-[#f8f8f8]': 'bg-[#ebebeb]'}  hover:bg-[#dcdcdc] rounded-sm py-4 px-5 mb-5`}  onClick={(e)=>{e.preventDefault(),toggleID(2)}}>
                                            <FaUserTie className='text-base  inline-block mr-1'/>
                                             Career in computer engineering
                                        </Link>
                                    </li>
                                 
                                    <li className='m-[2px]'>
                                        <Link href="contact-us" className={`inline-block w-full transition-all duration-100 border-2 border-primary ${ID ==3? 'bg-[#f8f8f8]': 'bg-[#ebebeb]'}  hover:bg-[#dcdcdc] rounded-sm  py-4 px-5 mb-5`}  onClick={(e)=>{e.preventDefault(),toggleID(3)}}>
                                            <FaComputer className='text-base  inline-block mr-1'/>
                                            Computer Engineers
                                        </Link>
                                    </li>

                                    <li className='m-[2px]'>
                                        <Link href="contact-us" className={`inline-block w-full transition-all duration-100 border-2 border-primary ${ID ==4? 'bg-[#f8f8f8]': 'bg-[#ebebeb]'}  hover:bg-[#dcdcdc] rounded-sm py-4 px-5 mb-5`}  onClick={(e)=>{e.preventDefault(),toggleID(4)}}>
                                            <FaUserTie className='text-base  inline-block mr-1'/>
                                            Career Opportunities
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Section Overview End */}

            {/* Section Our Programms Start */}
            <section className='py-20'>
                <div className='max-w-6xl mx-auto'>
                    <h1 className='text-3xl text-center font-bold uppercase mb-2 text-primary'>Explore Our Programmes</h1>
                    <p className='mb-20 w-[70%] ml-[15%] text-xl text-center leading-[140%]'>
                        What we do in the Department of <span className='font-bold'>Computer Engineering</span>
                    </p>

                    <div className="flex gap-x-5 flex-col lg:flex-row">

                        <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
                            <div className="h-full bg-white flex flex-col dark:bg-slate-950 pb-5 border-b border-b-slate-200 w-full relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-8 before:bg-primary"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="350">
                                <div className="absolute top-0 left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-xs text-center  bg-primary text-white min-w-[140px]">National Diploma (Full Time)</div>
                                <div className="h-[240px] w-full relative overflow-hidden rounded">
                                    <img src={ndFull} className="w-full h-full object-cover" />
                                </div>

                                <div className="py-3 px-4 dark:text-white flex-grow">
                                
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'><span className="font-semibold">Mode of Study:</span> Full Time</small>
                                    </div>
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'>
                                            <span className="font-semibold">Duration: </span>
                                            <span className="text-xs">4 Semester</span>
                                        </small>
                                    </div>
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'>
                                            <span className="font-semibold">School: </span>
                                            <span className="text-xs">School of Engineering</span>
                                        </small>
                                    </div>
                                    <div className='border-b border-b-slate-200  py-2'>
                                        <small className='text-base block font-semibold'>Course Objectives:</small>
                                        <small className='leading-[17px] inline-block'>
                                            The National Diploma in Computer Engineering Technology programme's graduate should be able to;
                                        </small>
                                        <li className='list-inside text-sm'>To carry out routine maintenance and repairs of computers.</li>
                                        <li className='list-inside text-sm'>To design and map out the layout for computers.</li>
                                        <li className='list-inside text-sm'>To install, set up and operate computers.</li>
                                        <li className='list-inside text-sm'>To prepare simple bill of quantities and specifications for computers.</li>
                                        <li className='list-inside text-sm'>To select and use appropriate instruments to carry out simple tests and measurement on all sub-systems in a computer and its peripherals.</li>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
                            <div className="h-full bg-white flex flex-col dark:bg-slate-950 pb-5 border-b border-b-slate-200 w-full relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-8 before:bg-primary"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="350">
                                <div className="absolute top-0 left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-xs text-center  bg-primary text-white min-w-[140px]">National Diploma (Part Time)</div>
                                
                                <div className="h-[240px] w-full relative overflow-hidden rounded">
                                    <img src={ndPart} className="w-full h-full object-cover" />
                                </div>
                                <div className="py-3 px-4 dark:text-white flex-grow">
                                
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'><span className="font-semibold">Mode of Study:</span> Part Time</small>
                                    </div>
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'>
                                            <span className="font-semibold">Duration: </span>
                                            <span className="text-xs">6 Semester</span>
                                        </small>
                                    </div>
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'>
                                            <span className="font-semibold">School: </span>
                                            <span className="text-xs">School of Engineering</span>
                                        </small>
                                    </div>
                                    <div className='border-b border-b-slate-200  py-2'>
                                        <small className='text-base block font-semibold'>Course Objectives:</small>
                                        <small className='leading-[17px] inline-block'>
                                        The National Diploma in Computer Engineering Technology programme's graduate should be able to;
                                        </small>
                                        <li className='list-inside text-sm'>To carry out routine maintenance and repairs of computers.</li>
                                        <li className='list-inside text-sm'>To design and map out the layout for computers.</li>
                                        <li className='list-inside text-sm'>To install, set up and operate computers.</li>
                                        <li className='list-inside text-sm'>To prepare simple bill of quantities and specifications for computers.</li>
                                        <li className='list-inside text-sm'>To select and use appropriate instruments to carry out simple tests and measurement on all sub-systems in a computer and its peripherals.</li>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
                            <div className="h-full bg-white flex flex-col dark:bg-slate-950 pb-5 border-b border-b-slate-200 w-full relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-8 before:bg-primary"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="350">
                                <div className="absolute top-0 left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-xs text-center  bg-primary text-white min-w-[140px]">Higher National Diploma (Full Time)</div>
                                <div className="h-[240px] w-full relative overflow-hidden rounded">
                                    <img src={hndFull} className="w-full h-full object-cover" />
                                </div>

                                <div className="py-3 px-4 dark:text-white flex-grow">
                                
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'><span className="font-semibold">Mode of Study:</span> Full Time</small>
                                    </div>
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'>
                                            <span className="font-semibold">Duration: </span>
                                            <span className="text-xs">4 Semester</span>
                                        </small>
                                    </div>
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'>
                                            <span className="font-semibold">School: </span>
                                            <span className="text-xs">School of Engineering</span>
                                        </small>
                                    </div>
                                    <div className='border-b border-b-slate-200  py-2'>
                                        <small className='text-base block font-semibold'>Course Objectives:</small>
                                        <small className='leading-[17px] inline-block'>
                                        The Hihger National Diploma in Computer Engineering Technology programme's graduate should be able to;
                                        </small>
                                        <li className='list-inside text-sm'>Design electronic circuits for use in modification of computer system.</li>
                                        <li className='list-inside text-sm'>Design electronic and computer installations, wiring and circuits projects.</li>
                                        <li className='list-inside text-sm'> Assemble, install and configure Computer systems.</li>
                                        <li className='list-inside text-sm'>carry out routine maintenance and reports on computer hardware and software.</li>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full lg:w-1/4">
                            <div className="h-full bg-white flex flex-col dark:bg-slate-950 pb-5 border-b border-b-slate-200 w-full relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-8 before:bg-primary"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="350">
                                <div className="absolute top-0 left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-xs text-center  bg-primary text-white min-w-[140px]">Higher National Diploma (Part Time)</div>
                                <div className="h-[240px] w-full relative overflow-hidden rounded">
                                    <img src={hndPart} className="w-full h-full object-cover" />
                                </div>


                                <div className="py-3 px-4 dark:text-white flex-grow">
                                    
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'><span className="font-semibold">Mode of Study:</span> Part Time</small>
                                    </div>
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'>
                                            <span className="font-semibold">Duration: </span>
                                            <span className="text-xs">4 Semester</span>
                                        </small>
                                    </div>
                                    <div className='border-b border-b-slate-200'>
                                        <small className='block'>
                                            <span className="font-semibold">School: </span>
                                            <span className="text-xs">School of Engineering</span>
                                        </small>
                                    </div>
                                    <div className='border-b border-b-slate-200  py-2'>
                                        <small className='text-base block font-semibold'>Course Objectives:</small>
                                        <small className='leading-[17px] inline-block'>
                                            The Higher National Diploma in Computer Engineering Technology programme's graduate should be able to;
                                        </small>
                                        <li className='list-inside text-sm'>Design electronic circuits for use in modification of computer system.</li>
                                        <li className='list-inside text-sm'>Design electronic and computer installations, wiring and circuits projects.</li>
                                        <li className='list-inside text-sm'> Assemble, install and configure Computer systems.</li>
                                        <li className='list-inside text-sm'>carry out routine maintenance and reports on computer hardware and software.</li>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Section Our Programms End */}

            {/* Section lecturers Start */}
            <section className='py-20 bg-[#f8f8f8]'>
                <div className='max-w-6xl mx-auto'>
                    <h1 className='text-3xl text-center font-bold uppercase mb-2 text-primary'>Meet our Lecturers</h1>
                    <p className='mb-10 w-[70%] ml-[15%] text-xl text-center leading-[140%]'>
                        Meet our team of seasoned and principle Lecturers at <span className='font-bold'>Computer Engineering</span>
                    </p>


                    <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 p-6'>

                        <div className='transition-all duration-300 transform hover:-translate-y-5   cursor-pointer text-center rounded-lg overflow-hidden bg-white border-[2px] border-primary'>
                           <div className=''  data-aos="fade-right" data-aos-easing="ease-out-cubic">
                                <div className="h-40 w-40 rounded-full overflow-hidden mx-auto">
                                    <img src={hod} className='min-w-full min-h-full'/>
                                </div>
                               
                                <div className='py-2 text-center'>
                                    <h3 className='text-gold'>Engr Moses Ikenna</h3>
                                    <p className='text-black text-sm'>Technologist </p>
                                </div>
                            </div>
                        </div>

                        
                        <div className='transition-all duration-300 transform hover:-translate-y-5   cursor-pointer font-sans text-center rounded-lg overflow-hidden bg-white border-[2px] border-primary'>
                           <div className=''  data-aos="flip-left" data-aos-easing="ease-out-cubic">
                                <div className="h-40 w-40 rounded-full overflow-hidden mx-auto">
                                    <img src={hod} className='min-w-full min-h-full'/>
                                </div>
                               
                                <div className='py-2 text-center'>
                                    <h3 className='text-gold'>Engr Moses Ikenna</h3>
                                    <p className='text-black text-sm'>Technologist </p>
                                </div>
                            </div>
                        </div>

                        
                        <div className='transition-all duration-300 transform hover:-translate-y-5   cursor-pointer font-sans text-center rounded-lg overflow-hidden bg-white border-[2px] border-primary'>
                           <div className=''  data-aos="zoom-in" data-aos-easing="ease-out-cubic">
                                <div className="h-40 w-40 rounded-full overflow-hidden mx-auto">
                                    <img src={hod} className='min-w-full min-h-full'/>
                                </div>
                               
                                <div className='py-2 text-center'>
                                    <h3 className='text-gold'>Engr Moses Ikenna</h3>
                                    <p className='text-black text-sm'>Technologist </p>
                                </div>
                            </div>
                        </div>

                        
                        <div className='transition-all duration-300 transform hover:-translate-y-5   cursor-pointer font-sans text-center rounded-lg overflow-hidden bg-white border-[2px] border-primary'>
                           <div className=''  data-aos="fade-left" data-aos-easing="ease-out-cubic">
                                <div className="h-40 w-40 rounded-full overflow-hidden mx-auto">
                                    <img src={hod} className='min-w-full min-h-full'/>
                                </div>
                               
                                <div className='py-2 text-center'>
                                    <h3 className='text-gold'>Engr Moses Ikenna</h3>
                                    <p className='text-black text-sm'>Technologist </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Section lecturers End */}

            {/* CTA Start */}
            <section className="py-24 ">
                <div className="max-w-6xl mx-auto">
                    <div className={`px-6 lg:px-20 py-5 lg:py-16  rounded-xl  bg-cover bg-center bg-fixed`} style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${comRoom})`}}>
                        <h1 className='text-center text-5xl uppercase font-extrabold text-white font-sans mb-4'>Delivery Excellence.</h1>
                        <p className='text-xl text-center lg:text-[1.6rem]   mb-4 text-white'>
                            We take immense pride in consistently delivering excellence, competence,
                            and reliable computer engineers. 
                            Over the past few decades since the inception of our department, no one else comes close.
                        </p>
                        <div className='text-end'>
                            <a href='' className="bg-primary hover:bg-primary-light text-white text-semibold py-3  px-4 rounded-lg  inline-block">Apply FPNO Now!</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA End */}

            {/* Section Students Excos Start */}
            <section className='py-20 bg-[#f8f8f8] relative'>
                <div className='max-w-6xl mx-auto relative'>
                    <h1 className='text-3xl text-center font-bold uppercase mb-2 text-primary'>Meet our Students Executives</h1>
                    <p className='mb-10 w-[70%] ml-[15%] text-xl text-center leading-[140%]'>
                        Meet our team of sound intelligent students servicing as excos at <span className='font-bold'>Computer Engineering</span>
                    </p>

                    <div className='gap-x-5 flex flex-col lg:flex-row'>

                        <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                            <div className='transition-all duration-200  flex h-full p-5 rounded-lg bg-white dark:bg-slate-950 dark:text-white shadow-lg hover:bg-slate-900 cursor-pointer hover:text-white dark:hover:bg-white dark:hover:text-black '>
                                <div className='w-20 h-20 rounded-full overflow-hidden flex-shrink-0'>
                                    <img src={hod} alt="" className='h-20 w-20 rounded-full'/>
                                </div>

                                <div className="28 grow">
                                    <div className='pl-3 '>
                                        <h2 className='font-semibold'>Kelly Smith</h2>
                                        <h3 className='my-1 text-primary'> President</h3>
                                        <p>	
                                           When your action inspire others to dream and be more then you are consider a leader.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                            <div className='transition-all duration-200  flex h-full p-5 rounded-lg bg-white dark:bg-slate-950 dark:text-white shadow-lg hover:bg-slate-900 cursor-pointer hover:text-white dark:hover:bg-white dark:hover:text-black '>
                                <div className='w-20 h-20 rounded-full overflow-hidden flex-shrink-0'>
                                    <img src={hod} alt="" className='h-20 w-20 rounded-full'/>
                                </div>

                                <div className="28 grow">
                                    <div className='pl-3 '>
                                        <h2 className='font-semibold'>Anglo Matthew</h2>
                                        <h3 className='my-1 text-primary'>Vice President</h3>
                                        <p>	
                                           When your action inspire others to dream and be more then you are consider a leader.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                            <div className='transition-all duration-200  flex h-full p-5 rounded-lg bg-white dark:bg-slate-950 dark:text-white shadow-lg hover:bg-slate-900 cursor-pointer hover:text-white dark:hover:bg-white dark:hover:text-black '>
                                <div className='w-20 h-20 rounded-full overflow-hidden flex-shrink-0'>
                                    <img src={hod} alt="" className='h-20 w-20 rounded-full'/>
                                </div>

                                <div className="28 grow">
                                    <div className='pl-3 '>
                                        <h2 className='font-semibold'>Kelvin Smith</h2>
                                        <h3 className='my-1 text-primary'>Secretary General</h3>
                                        <p>	
                                           When your action inspire others to dream and be more then you are consider a leader.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                   

                </div>
            </section>
            {/* Section Students Excos End */}

        </BaseLayout>
    );
}
