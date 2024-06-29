import {Link} from "react-router-dom";
import React from "react";

function About() {
    return (
        <div className='xl:px-24 px-10'>
            <div className='w-full h-auto lg:flex'>
                <div className='lg:w-1/2 h-auto py-2'>
                    <p className='mb-5 text-20'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                    <p className='mb-5 text-20'>
                        Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Nunc lobortis mattis aliquam
                        faucibus purus. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Urna nunc id cursus
                        metus. Consectetur a erat nam at lectus urna duis convallis. Felis donec et odio pellentesque
                        diam volutpat. Vestibulum morbi blandit cursus risus at ultrices mi.
                    </p>
                    <Link to='mailto:janithraditha@gmail.com' className='w-44 xl:w-48 bg-orange my-5 px-10 py-2 rounded-md flex'>
                        <span className='mr-1 text-12 xl:text-20 2xl:text-35'>Contact me</span>
                    </Link>
                </div>
                <div className='lg:w-1/2 w-full h-auto flex justify-center items-center'>
                    <div className=' h-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className='flex flex-col items-center'>
                            <div className='bg-orange w-150 h-150 rounded-full flex items-center justify-center'>
                                <p className='text-35 font-bold'>97%</p>
                            </div>
                            <div>
                                <p className='text-20 font-bold mt-2'>HTML5 & CSS3</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='bg-orange w-150 h-150 rounded-full flex items-center justify-center'>
                                <p className='text-35 font-bold'>75%</p>
                            </div>
                            <div>
                                <p className='text-20 font-bold mt-2'>WEB DESIGN</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='bg-orange w-150 h-150 rounded-full flex items-center justify-center'>
                                <p className='text-35 font-bold'>80%</p>
                            </div>
                            <div>
                                <p className='text-20 font-bold mt-2'>JAVA</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='bg-orange w-150 h-150 rounded-full flex items-center justify-center'>
                                <p className='text-35 font-bold'>55%</p>
                            </div>
                            <div>
                                <p className='text-20 font-bold mt-2'>PHP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;