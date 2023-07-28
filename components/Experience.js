import html from "public/images/HTML.png";
import cssImage from "public/images/CSS.png";
import nextjsImage from "public/images/nextjs.png";
import reactImage from "public/images/React.png";
import tailwindImage from "public/images/tailwind-css-icon.png";
import GithubImage from "public/images/Github.png";
import classNames from "classnames";
import Image from 'next/image';
import React from 'react'

const Experience = () => {
    const experience = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: cssImage,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 4,
            src: tailwindImage,
            title: "Tailwind CSS",
            style: "shadow-sky-400"
        },
        {
            id: 5,
            src: nextjsImage,
            title: "Nextjs",
            style: "shadow-black"
        },
        {
            id: 6,
            src: GithubImage,
            title: "Github",
            style: "shadow-gray-500"
        }

    ]
    return (

        <div className="experiance bg-white rounded-lg p-6 mx-10 m-2 ">
            <div className='text-black text-4xl font-extrabold'>
                Experience
            </div>
            <hr className="my-3 border border-gray-600 border-opacity-50 shadow-md" />
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 text-center'>
                {
                    experience.map(({ id, src, title, style }) => (
                        <div key={id} className={classNames('shadow-md hover:scale-110 duration-500 py-2 rounded-lg',
                            style)}>
                            <Image src={src} height={100} width={150} alt={title} />
                            <p className='text-black mt-4 font-bold'>{title}</p>
                        </div>

                    ))
                }

            </div>

        </div>

    )
}

export default Experience
