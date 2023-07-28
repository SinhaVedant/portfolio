import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail, BiLogoTwitter } from "react-icons/bi";
import Link from 'next/link';
import React from "react";

export default function Contact() {
    return (
        <div className="px-4 flex md:flex-col mt-4 md:my-auto">
            <div className='px-4 md:py-8 md:px-0 hover:scale-150 duration-500'>
                <Link href="https://github.com/SinhaVedant" title="Github" target="_blank">
                    <FaGithub size={50} />
                </Link>
            </div>
            <div className='px-4 md:py-8 md:px-0 hover:scale-150 duration-500'>
                <Link href="https://www.linkedin.com/in/sinhavedant2003/" title="Linkedin" target="_blank">
                    <FaLinkedin size={50} />
                </Link>
            </div>
            <div className='px-4 md:py-8 md:px-0 hover:scale-150 duration-500'>
                <Link href="mailto:vedantsinha2003@gmail.com" title="Gmail" target="_blank">
                    <BiLogoGmail size={50} />
                </Link>
            </div>
            <div className='px-4 md:py-8 md:px-0 hover:scale-150 duration-500'>
                <Link href="https://twitter.com/sinhavedant2003" title="Twitter" target="_blank">
                    <BiLogoTwitter size={50} />
                </Link>
            </div>
        </div>

    )
}