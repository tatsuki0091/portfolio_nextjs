import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavLinks = () => {
  return (
    <>
      <li className="mr-6">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
            }
          >
            Tatsuki Yamatani
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/career">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
            }
          >
            My Career
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/work">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
            }
          >
            Work
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/contact">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
            }
          >
            Contact
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href={"/pdf/resume.pdf"}>
          <a
            target="_blank"
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
            }
          >
            Resume
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
