import React from "react";
import Image from "next/image";
import profile from "../public/img/profile.jpg";
import { Button } from "../styles/aboutStyle";
import Link from "next/link";

const About = () => {
  return (
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
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey there,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              I'm Tatsuki who has 4 years experiences as a Fullstack Developer
              specialized in both front-end and back-end web development.
            </p>
            <p>I can help you with all the sides of your project:</p>
            <p> I'm currently live in Vancouver.</p>
          </div>
        </div>
      </div>
      <Link href="../pdf/resume.pdf">
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
      </Link>
    </div>
  );
};

export default About;
