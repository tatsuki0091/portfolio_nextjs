import React from "react";
import Image from "next/image";
import appGrowthNetwork from "../public/img/appGrowthNetwork.jpg";
import matching from "../public/img/matching.jpg";
import media from "../public/img/media.jpg";
import medicalCheck from "../public/img/medicalCheck.jpg";
import ScrollRevealContainer from "../components/careers/ScrollRevealContainer";

const work = () => {
  return (
    <main className="max-w-4xl mx-auto mt-10 antialiased">
      <div className="container w-full first-letter:px-4 mx-auto">
        <ScrollRevealContainer move="bottom">
          <div className=" lg:flex lg:flex-row item-center  flex flex-col-reverse ">
            <div className="w-1/2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  width={383}
                  height={280}
                  src={appGrowthNetwork}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    App Growth Network
                  </h5>
                </a>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  App Growth Network is the App Store Optimization company for
                  mobile application.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-text-white">
                  I&apos;m currently creating dashboard application for
                  registered users.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I developed the frontend and backend. I implemented the
                  frontend with React, Redux for frontend and the backend with
                  AWS Amplify.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I&apos;m managing banch of AWS service for backend. AWS
                  Amplify, S3, VPC, EC2, IAM, AWS AppSync, Lambda, Amazon
                  DynamoDB, GraphQL, etc, and backend programming languages are
                  Python and Javascript.I&apos;m creating every stuff.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I&apos;m feeling it&apos;s good opportunity to learn AWS
                  things, and it&apos;s fun.
                </p>
                {/* <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a> */}
              </div>
            </div>

            <div className="w-1/2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  width={383}
                  height={280}
                  src={matching}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
                    Matching Service
                  </h5>
                </a>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  This matching service is one of the most famous matching
                  service in Japan.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I developed the frontend and backend. I implemented the
                  frontend with HTML5, CSS3, Javascript, JQuery for frontend and
                  the backend with PHP, Laravel, MySQL.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  It was my first experience developing the big system. I
                  learned how to write effective source codes here/ The
                  experience here is being utilized in my current work.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I&apos;m afraid I&apos;m not available to post more details
                  about this here due to a Nondisclosure Agreement, but if I
                  have the opportunity to chat with you, I can give you more
                  details there.
                </p>
                {/* <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a> */}
              </div>
            </div>
          </div>
        </ScrollRevealContainer>
      </div>
      <div className="mt-10 container w-full first-letter:px-4 mx-auto">
        <ScrollRevealContainer move="bottom">
          <div className=" lg:flex lg:flex-row item-center  flex flex-col-reverse ">
            <div className="w-1/2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  width={383}
                  height={280}
                  src={medicalCheck}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
                    Medical Check Sheet Web Application
                  </h5>
                </a>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  This application was the private medical check sheet for
                  players who attended one of the biggest sport festivals in the
                  world.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I developed the frontend and backend. I implemented the
                  frontend with HTML5, CSS3, Javascript, JQuery for frontend and
                  the backend with Java, Sprint Boot, PostgreSQL.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I developed the frontend and backend. I implemented the
                  frontend with HTML5, CSS3, Javascript, JQuery for frontend and
                  the backend with Java, Sprint Boot, PostgreSQL.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I&apos;m afraid I&apos;m not available to post more details
                  about this here due to a Nondisclosure Agreement, but if I
                  have the opportunity to chat with you, I can give you more
                  details there.
                </p>
                {/* <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a> */}
              </div>
            </div>
            <div className="w-1/2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  width={383}
                  height={280}
                  src={media}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
                    Medical Web Media and E-commerce Web Application
                  </h5>
                </a>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  This Medical Web Media and E-commerce service is published for
                  doctors, MRs, and investors in Japan.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  Anyone can view the information, but some articles are
                  available be viewed by purchasing each time for a fee or by
                  subscribing to some articles.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I developed the frontend and backend. I implemented the
                  frontend with HTML5, CSS3, Javascript, JQuery for frontend and
                  the backend with PHP, Laravel, MySQL.
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  A little difficult part was that to incorporate Stripe library
                  into the system
                </p>
                <p className="mb-3 text-lg font-normal  dark:text-white">
                  I&apos;m afraid I&apos;m not available to post more details
                  about this here due to a Nondisclosure Agreement, but if I
                  have the opportunity to chat with you, I can give you more
                  details there.
                </p>
                {/* <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a> */}
              </div>
            </div>
          </div>
        </ScrollRevealContainer>
      </div>
    </main>
  );
};

export default work;
