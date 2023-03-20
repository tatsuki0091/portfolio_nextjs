import React from "react";
import { Header } from "../styles/careerStyle";
import Link from "next/link";
import { EduInfo } from "../components/careers/eduInfo";
import { CareerInfo } from "../components/careers/careerInfo";
import ScrollRevealContainer from "../components/careers/ScrollRevealContainer";

// interface Education {
//   school: string;
//   term: string;
//   link: string;
//   Majored: string;
// }

// interface Career {
//   company: string;
//   term: string;
//   link: string;
//   description: string[];
//   technologies: string[];
// }

const career = () => {
  const eduInfo = EduInfo;
  const careerInfo = CareerInfo;
  return (
    <>
      <main className="max-w-4xl mx-auto mt-10 antialiased">
        <ScrollRevealContainer move="right">
          <Header>Career</Header>
        </ScrollRevealContainer>
        <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center  flex flex-col-reverse">
            <div>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {careerInfo &&
                  careerInfo.map((info) => (
                    <div key={info.company}>
                      <ScrollRevealContainer move="right">
                        <li className="mb-10 ml-6">
                          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-600 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg
                              className="w-3 h-3 text-white dark:text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <h3
                            id="association"
                            className="flex items-center mb-1 text-lg font-semibold  dark:text-white"
                          >
                            {info.company}
                            {/* <span className="bg-red-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-600 dark:text-white ml-3">
                        Latest
                      </span> */}
                          </h3>
                          <time className="block mb-2 text-sm font-normal leading-none  dark:text-white">
                            {info.term}
                          </time>
                          {info.description.map(
                            (description: string, index: number) => (
                              <p
                                key={index}
                                className="mb-4 text-base font-normal  dark:text-white"
                              >
                                {description}
                              </p>
                            )
                          )}
                          <p className="mb-4 text-base font-normal text-blue-600 dark:text-blue-600">
                            <Link href={info.link}>
                              <a target="_blank">{info.link}</a>
                            </Link>
                          </p>
                          {info.technologies.map(
                            (technology: string, index: number) => (
                              <p
                                key={index}
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                              >
                                {technology}
                              </p>
                            )
                          )}
                        </li>
                      </ScrollRevealContainer>
                    </div>
                  ))}
              </ol>
            </div>
          </div>
        </div>
        <ScrollRevealContainer move="right">
          <Header>Education</Header>
        </ScrollRevealContainer>
        <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center  flex flex-col-reverse">
            <div>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {eduInfo &&
                  eduInfo.map((info) => (
                    <div key={info.school}>
                      <ScrollRevealContainer move="right">
                        <li className="mb-10 ml-6">
                          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-600 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg
                              className="w-3 h-3 text-white dark:text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <h3 className="flex items-center mb-1 text-lg font-semibold  dark:text-white">
                            {info.school}
                          </h3>
                          <time className="block mb-2 text-sm font-normal leading-none  dark:text-white">
                            {info.term}
                          </time>
                          <p className="mb-4 text-base font-normal  dark:text-white">
                            {info.Majored}
                          </p>
                          <p className="mb-4 text-base font-normal text-blue-600 dark:text-blue-600">
                            <Link href={info.link}>
                              <a target="_blank">{info.link}</a>
                            </Link>
                          </p>
                        </li>
                      </ScrollRevealContainer>
                    </div>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  return { props: { eduInfo: EduInfo, careerInfo: CareerInfo } };
};

export default career;
