import icon from "../images/download.png";
import React from "react";

function Contact() {
    return (
        <div className="flex h-auto justify-center items-center w-full">
            <div className='lg:w-1/2 w-3/4 flex flex-col items-center'>
                <div className="my-2 w-150 h-150 rounded-full contact-img bg-center bg-cover"></div>
                <div className="my-2 w-full flex flex-col items-center h-auto">
                    <div className="text-center py-2">
                        <h1 className='text-35 md:text-50 font-bold leading-40'>
                            Build your website <br/> in record time
                        </h1>
                    </div>
                    <div className="text-center py-2 md:px-10">
                        <p className="text-20">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
                            sagittis suscipit ultrices.</p>
                    </div>
                </div>
                <div className="my-2 w-full h-100 flex items-center justify-center">
                    <form className='flex flex-col items-center w-full'>
                        <input type="text" placeholder="Enter a valid email address" className="bg-none py-1 w-300 text-center"/>
                        <hr className="bg-gray h-0.5 w-1/2" />
                        <button className='bg-orange my-5 px-10 py-2 rounded-md flex'>
                            <span className='mr-1 text-12 xl:text-15 2xl:text-35'>SUBMIT</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;