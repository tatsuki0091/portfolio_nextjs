import React from 'react';
import { ModalInterface } from './interfaces';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';
// import { useInput } from '../../../../hooks/useInput';
import { useRouter } from 'next/router';
const Modal = <T,>({
  isOpen,
  // onClose,
  children,
  setIsModalOpen,
  path,
}: ModalInterface<T>) => {
  if (!isOpen) return null;
  const { push } = useRouter();
  const closeModal = (
    setModal: (value: React.SetStateAction<boolean>) => void,
    redirect?: string
  ) => {
    setModal((prev) => (prev = false));
    if (redirect !== undefined && redirect !== null) {
      push(redirect);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        {/* <svg
                    className={styles.svgFrame}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 130.2 130.2"
                >
                    <circle
                        className={`${styles.path} ${styles.circle}`}
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="6"
                        strokeMiterlimit="10"
                        cx="65.1"
                        cy="65.1"
                        r="62.1"
                    />
                    <polyline
                        className={`${styles.path} ${styles.check}`}
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="100.2,40.2 51.5,88.8 29.8,67.5 "
                    />
                </svg> */}
        <button
          className="w-full mt-12 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
          onClick={() => closeModal(setIsModalOpen, path)}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
