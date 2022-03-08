import React from "react";
import Link from "next/link";
import ThemeSwitch from "../utils/ThemeSwitch";

const Navigation = () => {
  return (
    <header>
      <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
        <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
          <ul className="flex">
            <li className="mr-6">
              <Link href="/">
                <a
                  className={
                    "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
                  }
                >
                  Tatsuki Yamatani
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/">
                <a
                  className={
                    "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
                  }
                >
                  My Carrer
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/">
                <a
                  className={
                    "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
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
                    "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
                  }
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
