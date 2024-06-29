import icon from "../images/download.png";
import React from "react";
import {Link} from "react-router-dom";

function Experiences() {
    return (
        <div className="Experiences w-full h-auto px-10 lg:px-20 xl:px-64">
            <div className='w-full h-auto flex items-center justify-center'>
                <div className='mt-2 h-auto lg:w-3/4 text-20 text-center'>
                    <p>Nunc sed blandit libero volutpat sed cras. Risus quis varius quam quisque id. Semper auctor neque
                        vitae tempus quam pellentesque.
                    </p>
                </div>
            </div>
            <div className='w-full h-auto'>
                <div className='mt-10 pb-2'>
                    <hr className="bg-white h-0.5"/>
                </div>
                <div className='w-full h-auto md:flex md:justify-center'>
                    <div className='md:w-1/3 h-auto'>
                        <p>September, 2016 – May, 2017</p>
                    </div>
                    <div className='md:w-2/3 h-auto'>
                        <h3 className='text-20 font-bold text-orange'>Junior Developer</h3>
                        <p className='mt-5 text-20 text-gray'>Sed quia consequuntur magni dolores eos quira tione estera
                            voluptatem sequi nesciunt nuncera
                            permano nence of the stars from which we spring.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto'>
                <div className='mt-10 pb-2'>
                    <hr className="bg-white h-0.5"/>
                </div>
                <div className='w-full h-auto md:flex md:justify-center'>
                    <div className='md:w-1/3 h-auto'>
                        <p>May, 2018 – Jun, 2019</p>
                    </div>
                    <div className='md:w-2/3 h-auto'>
                        <h3 className='text-20 font-bold text-orange'>Senior Developer</h3>
                        <p className='mt-5 text-20 text-gray'>Molestie a iaculis at erat pellentesque adipiscing.
                            Porttitor eget dolor morbi non arcu risus quis varius quam. Odio aenean sed adipiscing diam
                            donec. Id diam maecenas ultricies mi eget mauris.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto'>
                <div className='mt-10 pb-2'>
                    <hr className="bg-white h-0.5"/>
                </div>
                <div className='w-full h-auto md:flex md:justify-center'>
                    <div className='md:w-1/3 h-auto'>
                        <p>Jun, 2019 – December, 2020</p>
                    </div>
                    <div className='md:w-2/3 h-auto'>
                        <h3 className='text-20 font-bold text-orange'>Senior Developer</h3>
                        <p className='mt-5 text-20 text-gray'>Etiam erat velit scelerisque in dictum non consectetur.
                            Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum.
                            Tristique senectus et netus et malesuada fames.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to='mailto:janithraditha@gmail.com' className='bg-orange my-5 px-10 py-2 rounded-md flex'>
                    <span className='mr-1 text-12 xl:text-15 2xl:text-35'>Contact me</span>
                </Link>
            </div>
        </div>
    )
}

export default Experiences;