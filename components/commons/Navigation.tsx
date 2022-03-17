import React, { useState, useContext } from "react";
import NavLinks from "./NavLinks";
import ThemeSwitch from "../utils/ThemeSwitch";
import Link from "next/link";
import {
  HumbergerButton,
  BlackLine,
  WhiteLine,
} from "../../styles/navigationStyle";
import { DataContext } from "../contexts/DataContext";

const Navigation = () => {
  const mountedContext = useContext(DataContext);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuFunction = () => {
    setOpenMenu((prevCount) => !prevCount);
  };
  return (
    <header>
      <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
        <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
          <ul className="md:flex  hidden flex-initial text-left">
            <li className="mr-6">
              <Link href="/">
                <a
                  className={
                    "font-medium tracking-wider transition-colors hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
                  }
                >
                  Top
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/career">
                <a
                  className={
                    "font-medium tracking-wider transition-colors hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
                  }
                >
                  Career
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/work">
                <a
                  className={
                    "font-medium tracking-wider transition-colors hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
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
                    "font-medium tracking-wider transition-colors  hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
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
                    "font-medium tracking-wider transition-colors hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
                  }
                >
                  Resume
                </a>
              </Link>
            </li>
          </ul>

          <button
            onClick={menuFunction}
            className="flex-initial py-3 ml-1 mr-1 px-5 absolute top-0 left-0 md:hidden"
          >
            <HumbergerButton />
            <label id="label1" className="py-2" htmlFor="input">
              {mountedContext.mounted == true ? (
                <>
                  <WhiteLine></WhiteLine>
                  <WhiteLine></WhiteLine>
                  <WhiteLine></WhiteLine>
                </>
              ) : (
                <>
                  <BlackLine></BlackLine>
                  <BlackLine></BlackLine>
                  <BlackLine></BlackLine>
                </>
              )}
            </label>
          </button>
          {openMenu ? (
            <div className="flex-row  absolute z-10 top-0 left-0  min-h-fit min-w-full">
              <div className="basis-1/2"></div>
              <div className="basis-1/2 bg-white">
                <ul className=" text-center border-l-2 ">
                  <li className="p-2 border-b-2 dark:bg-black">
                    <button
                      onClick={menuFunction}
                      className="hover:text-red-600 font-medium tracking-wider  w-full container  items-center uppercase dark:text-white dark:hover:text-blue-600"
                    >
                      Close
                    </button>
                  </li>
                  <li className="p-2 border-b-2 dark:bg-black">
                    <Link href="/">
                      <a
                        className={
                          "font-medium tracking-wider block transition-colors  hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
                        }
                      >
                        TOP
                      </a>
                    </Link>
                  </li>
                  <li className="p-2 border-b-2 dark:bg-black">
                    <Link href="/career">
                      <a
                        className={
                          "font-medium tracking-wider block transition-colors hover:text-red-600 uppercase  dark:hover:text-blue-600"
                        }
                      >
                        My Career
                      </a>
                    </Link>
                  </li>
                  <li className="p-2 border-b-2 dark:bg-black">
                    <Link href="/work">
                      <a
                        className={
                          "font-medium tracking-wider block transition-colors hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
                        }
                      >
                        Work
                      </a>
                    </Link>
                  </li>
                  <li className="p-2 border-b-2 dark:bg-black">
                    <Link href={"/pdf/resume.pdf"}>
                      <a
                        target="_blank"
                        className={
                          "font-medium tracking-wider block transition-colors hover:text-red-600 uppercase dark:text-white dark:hover:text-blue-600"
                        }
                      >
                        Resume
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : undefined}
          <div className="flex container flex-row px-4 mx-auto  justify-end">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
