import Image from 'next/image';
import React from 'react'

const HeroImage = () => {
    return (
        <div className="px-8 flex flex-col items-center mt-6 md:mt-24" >
            <Image src="/images/Vedant.jpg" height={300} width={300} alt="My Picture" priority={true} className='rounded-lg' />
            <div className='font-extrabold text-3xl bg-white rounded-lg my-6 px-12 text-black p-2'>
                Vedant Sinha
            </div>
        </div>
    )
}

export default HeroImage;
