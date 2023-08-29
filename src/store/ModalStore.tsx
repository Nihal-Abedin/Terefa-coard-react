import { create } from "zustand";

// type HandleModalParams = {
//     [name: string]: boolean;
// }
interface ModalTypes {
  modalNames: {
    [name: string]: boolean;
  };
  handleModalOpen: (name: { [name: string]: boolean }) => void;
}

export const useModalStore = create<ModalTypes>((set) => ({
  modalNames: { modalName: false },
  handleModalOpen: (name) => {
    set((state) => (state.modalNames = name));
  },
}));
