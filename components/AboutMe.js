import React from 'react'
import { BiPhoneCall } from "react-icons/bi";

const AboutMe = () => {
    return (
        <div className="bg-white rounded-lg p-6 md:max-w-md m-5 md:m-0 ">
            <p className='text-black text-4xl font-extrabold'>
                About Me
            </p>
            <hr className="my-3 border border-gray-600 border-opacity-50 shadow-md" />
            <p className="text-black text-2xl font-bold py-3">
                I am a college student currently in my second year at the National University of Singapore (Computer Science) and I am interested and skilled in web development.
            </p>
            <div className=" py-3 text-black flex">
                <BiPhoneCall size={40} />
                <p className='text-black text-2xl font-bold ml-4'>+91 8920141203</p>
            </div>
        </div>
    )
}

export default AboutMe;
