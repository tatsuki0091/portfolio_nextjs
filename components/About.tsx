import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import profile from '../public/img/profile.jpg';
// import { Button } from "../styles/aboutStyle";
// import Link from "next/link";
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { DataContext } from './contexts/DataContext';

const About = () => {
  const mountedContext = useContext(DataContext);
  const ParticlesBg = dynamic(
    () => {
      return import('particles-bg');
    },
    { ssr: false }
  );

  return (
    <>
      {mountedContext.mounted == true ? (
        <>
          <ParticlesBg color={'#4f4f4f'} num={200} type="cobweb" bg={true} />
        </>
      ) : (
        <>
          <ParticlesBg color={'#dbdbdb'} num={200} type="cobweb" bg={true} />
        </>
      )}
      <div className="container px-4 mx-auto">
        <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
          <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
            <Image
              src={profile}
              alt="Profile"
              priority={true}
              className="rounded-full"
              width={250}
              height={300}
              placeholder="blur"
            />
          </div>
          <div className="lg:px-4 lg:mt-12 ">
            <h1 className="text-2xl font-bold lg:text-5xl dark:text-white">
              Hello
            </h1>
            <div className="mt-6 text-lg dark:text-white">
              <p> Hello! </p>
              <p className="mb-4">
                I'm Tatsuki, thank you for visiting my page. I am an experienced
                Fullstack Developer out of Vancouver, BC of over four years,
                specializing in both front-end and back-end web development.
              </p>
              <p>I'm fully equipped to assist in all sides of your project.</p>
              <p>
                Please check out my page to see more details about my experience
                and to learn a little bit more about me.
              </p>
              <p>Cheers</p>
            </div>
          </div>
        </div>
        {/* <Link href="..public/pdf/resume.pdf">
          <a
            target="_blank"
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-white  dark:text-white"
            }
          >
            <Button className="hover:bg-red-600 dark:hover:bg-blue-800">
              Resume
            </Button>
          </a>
        </Link> */}
      </div>
    </>
  );
};

export default About;
