import React from "react";
import { Header } from "../styles/careerStyle";
import Link from "next/link";
import ScrollRevealContainer from "../components/careers/ScrollRevealContainer";

const career = () => {
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
                      Bittreo
                      <span className="bg-red-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-600 dark:text-white ml-3">
                        Latest
                      </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none  dark:text-white">
                      May 2nd, 2022 - present
                    </time>
                    <p className="mb-4 text-base font-normal  dark:text-white">
                      -Develop Dashboard application for Sellers and Tellers of
                      cryptocurrencies.
                    </p>
                    <p className="mb-4 text-base font-normal  dark:text-white">
                      -Node.js, Express.js configuration and custom extensions
                      for MVC server-side logic
                    </p>
                    <p className="mb-4 text-base font-normal  dark:text-white">
                      -Vue.js, Vuex implementation for front-end
                    </p>
                    <p className="mb-4 text-base font-normal text-blue-600 dark:text-blue-600">
                      <Link href="https://appgrowthnetwork.com">
                        <a target="_blank">https://bittreo.com/</a>
                      </Link>
                    </p>
                    <h3 className=" dark:text-white">Technologies</h3>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      JavaScript
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Vue.js
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Vuex
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      AWS
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Node.js
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Express.js
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      MongoDB
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      etc
                    </p>
                  </li>
                </ScrollRevealContainer>
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
                      App Growth Network -Fullstack Developer(Contract)
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none  dark:text-white">
                      January 5th, 2022 - April 30th, 2022
                    </time>
                    <p className="mb-4 text-base font-normal  dark:text-white">
                      -Develop Dashboard application for marketers of mobile
                      application
                    </p>
                    <p className="mb-4 text-base font-normal  dark:text-white">
                      -AWS Amplify configuration and custom extensions for MVC
                      server-side logic
                    </p>
                    <p className="mb-4 text-base font-normal  dark:text-white">
                      -React, Redux implementation for front-end
                    </p>
                    <p className="mb-4 text-base font-normal text-blue-600 dark:text-blue-600">
                      <Link href="https://appgrowthnetwork.com">
                        <a target="_blank">https://appgrowthnetwork.com</a>
                      </Link>
                    </p>
                    <h3 className=" dark:text-white">Technologies</h3>

                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      JavaScript
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      React
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Redux
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      AWS
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      AWS Amplify
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Python
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Node.js
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Amazon DynamoDB
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      GraphQL
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      etc
                    </p>
                  </li>
                </ScrollRevealContainer>
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
                      className="mb-1 text-lg font-semibold  dark:text-white"
                    >
                      Casareal Inc. -Fullstack Developer(Fulltime)
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none  dark:text-white">
                      March 1th, 2018 - February 28th, 2021
                    </time>
                    <p className="text-base font-normal  dark:text-white">
                      Casareal is a software development company that serves as
                      a technical partner for clients.
                    </p>
                    <p className="text-base font-normal dark:text-white">
                      -Laravel framework configuration and custom extensions for
                      MVC server-side logic
                    </p>
                    <p className="text-base font-normal  dark:text-white">
                      -Spring framework configuration and custom extensions for
                      MVC server-side logic
                    </p>
                    <p className="text-base font-normal  dark:text-white">
                      -MySQL configuration as attached data-store for above
                    </p>
                    <p className="text-base font-normal  dark:text-white">
                      -HTML5, CSS, jQuery implementation for front-end
                    </p>
                    <p className="text-base font-normal  dark:text-white">
                      -Developed and structured 3 web application with PHP,
                      Laravel, MySQL and AWS for clients
                    </p>
                    <p className="text-base font-normal å dark:text-white">
                      -Developed and structured 1 web application with Java,
                      Spring Boot, MySQL and AWS for the client
                    </p>
                    <p className="mb-4 text-base font-normal text-blue-600 dark:text-blue-600">
                      <Link href="https://www.casareal.co.jp">
                        <a target="_blank">https://www.casareal.co.jp</a>
                      </Link>
                    </p>
                    <h3 className=" dark:text-white">Technologies</h3>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      PHP
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Java
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      JavaScript
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Laravel
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Spring
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      JQuery
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      HTML5
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      CSS3
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      MySQL
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      etc
                    </p>
                  </li>
                </ScrollRevealContainer>
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
                      className="mb-1 text-lg font-semibold  dark:text-white"
                    >
                      Soft Hyperion Inc. -Fullstack Developer(Fulltime)
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none  dark:text-white">
                      Feburuary 1th, 2016 - January 31th, 2021
                    </time>
                    <p className="text-base font-normal  dark:text-white">
                      Soft Hyperion is a software development company that
                      serves as a technical partner for clients.
                    </p>
                    <p className="text-base font-normal  dark:text-white">
                      -Spring Boot framework configuration and custom extensions
                      for MVC server-side logic
                    </p>
                    <p className="text-base font-normal dark:text-white">
                      -MySQL configuration as attached data-store for above
                    </p>
                    <p className="text-base font-normal  dark:text-white">
                      -HTML5, CSS, jQuery implementation for front-end.
                    </p>
                    <p className="text-base font-normal  dark:text-white">
                      -Developed and structured 2 web application with Java,
                      Spring Boot, MySQL for clients
                    </p>
                    <p className="mb-4 text-base font-normal text-blue-600 dark:text-blue-600">
                      <Link href="https://soft-hyperion.com">
                        <a target="_blank">https://soft-hyperion.com</a>
                      </Link>
                    </p>
                    <h3 className=" dark:text-wjote">Technologies</h3>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Java
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      JavaScript
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Spring
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      JQuery
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      HTML5
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      CSS3
                    </p>
                    <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg border border-gray-200  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      MySQL
                    </p>
                  </li>
                </ScrollRevealContainer>
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
                      Cornerstone International Community College of Canada
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none  dark:text-white">
                      May 1th, 2022 - present
                    </time>
                    <p className="mb-4 text-base font-normal  dark:text-white">
                      -Majored in Computer Science
                    </p>
                    <p className="mb-4 text-base font-normal text-blue-600 dark:text-blue-600">
                      <Link href="https://ciccc.ca">
                        <a target="_blank">https://ciccc.ca</a>
                      </Link>
                    </p>
                  </li>
                </ScrollRevealContainer>
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
                    <h3 className="mb-1 text-lg font-semibold  dark:text-white">
                      Kobe Gakuin University
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none  dark:text-white">
                      April 1th, 2008 - March 31th, 2014
                    </time>
                    <p className="mb-4 text-base font-normal  dark:text-white">
                      -Majored in Business Administration
                    </p>
                    <p className="mb-4 text-base font-normal text-blue-600 dark:text-blue-600">
                      <Link href="https://www.kobegakuin.ac.jp">
                        <a target="_blank">https://www.kobegakuin.ac.jp</a>
                      </Link>
                    </p>
                  </li>
                </ScrollRevealContainer>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default career;
