export interface ModalInterface<T> {
  isOpen: boolean;
  // onOpen: () => void;
  // onClose: (
  //     setModal: (value: React.SetStateAction<boolean>) => void,
  //     redirect?: (href: string, options?: T) => void,
  // ) => void;
  path?: string;
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
  children: React.ReactNode;
  // redirect?: (href: string, options?: T) => void;
}
