import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import { TbBrandLeetcode } from "react-icons/tb";
const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/soumya-sovan-2b25ba2a7/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Avnosx',
        },
        {
          id:3,
          child:(
              <>
              Resume <BsFillPersonLinesFill size={30}/>
              </>
          ),
          href:'/122EE0157_SoumyaSovanNayak_Intern.pdf',
          download:'true',
      },{
        id:4,
        child:(
            <>
            Leetcode <TbBrandLeetcode size={30}/>
            </>
        ),
        href:'https://leetcode.com/SoumyaS21/',
        download:'true',
    },
        {
            id:5,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:soumyasovan2000@gmail.com',
            style:'rounded-br-md',
        }
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default SocialLinks;