import { useState } from 'react';
import Image from 'next/image';
import ScrollRevealContainer from '../components/careers/ScrollRevealContainer';
import { WorkInfo } from '../components/works/workInfo';
import Modal from '../components/commons/modals/Modal';
interface Work {
  workInfo: {
    image: string;
    company: string;
    description: string[];
  }[];
}

const work = (props: Work) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <main className="max-w-4xl mx-auto mt-10 antialiased">
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {props.workInfo &&
              props.workInfo.map((info) => (
                <div
                  key={info.company}
                  className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                >
                  <ScrollRevealContainer move="bottom">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                      <button
                        onClick={() => {
                          setIsModalOpen(true);
                        }}
                      >
                        <Image
                          alt="Placeholder"
                          className="block h-auto w-full"
                          src={info.image}
                          width={383}
                          height={280}
                        />
                      </button>
                      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                          <button
                            onClick={() => {
                              setIsModalOpen(true);
                            }}
                          >
                            {info.company}
                          </button>
                        </h1>
                      </header>
                      {/* <footer className=" p-2 md:p-4">
                        <div className="overflow-y-auto h-32">
                          {info.description.map(
                            (description: string, index: number) => (
                              <p key={index}>{description}</p>
                            )
                          )}
                        </div>
                      </footer> */}
                    </article>
                  </ScrollRevealContainer>
                  <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                    {info.description.map(
                      (description: string, index: number) => (
                        <p key={index}>{description}</p>
                      )
                    )}
                  </Modal>
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  return { props: { workInfo: WorkInfo } };
};

export default work;
