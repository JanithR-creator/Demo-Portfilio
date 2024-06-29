import {Link} from "react-router-dom";
import React from "react";
import myImage from '../images/myimg.png';
import icon from "../images/download.png";
import '../App.css'

function Home() {
    return(
        <div className="h-auto w-full grid md:grid-cols-2 sm:grid-cols-1">
                <div className="flex flex-col items-center justify-center">
                    <div className="h-auto w-full flex flex-col items-center">
                        <div>
                            <h5 className='mt-10 text-20 xl:text-25 2xl:text-45'>I'm a web-developer</h5>
                            <h1 className='mt-2 text-35 xl:text-50 2xl:text-90 leading-32 xl:leading-48 2xl:leading-80'>Janith <br/>Ranasinghe</h1>
                        </div>
                        <hr className="w-3/4 mt-12"/>
                    </div>
                    <div className="h-auto pt-5 w-full flex flex-col items-center">
                    <table className='table-auto text-table-txt text-12 xl:text-15 2xl:text-35'>
                            <tbody>
                            <tr>
                                <td className='font-bold'>Date of Birth:</td>
                                <td className='pl-2'>Jun 18, 2001</td>
                            </tr>
                            <tr>
                                <td className='font-bold'>Address:</td>
                                <td className='pl-2'>Kahawa, Kosgama</td>
                            </tr>
                            <tr>
                                <td className='font-bold'>Email:</td>
                                <td className='pl-2 underline'><Link
                                    to='https://www.gmail.com'>janithraditha@gmail.com</Link></td>
                            </tr>
                            <tr>
                                <td className='font-bold'>Phone:</td>
                                <td className='pl-2'>077-2127411</td>
                            </tr>
                            </tbody>
                        </table>
                        <button className='bg-orange my-5 px-10 py-2 rounded-md flex'>
                            <span className='mr-1 text-12 xl:text-15 2xl:text-35'>Download CV</span>
                            <img src={icon} alt="download" className='h-5 w-5 2xl:h-12 2xl:w-12' />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className='2xl:w-920 xl:w-390 md:w-300 image'>
                        <img src={myImage} alt="myimage" className="bg-cover bg-center h-full" />
                    </div>
                </div>
        </div>
    )
}

export default Home;