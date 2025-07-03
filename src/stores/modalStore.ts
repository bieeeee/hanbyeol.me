import { signal, computed } from "@preact/signals-react";

type ModalType = {
  title: string;
  icon: string;
  isOpen: boolean;
};

const modalState = signal<ModalType>({
  title: "",
  icon: "",
  isOpen: false
});

export const modalStore = {
  state: modalState,
  isOpen: computed(() => modalState.value.isOpen),
  title: computed(() => modalState.value.title),
  open(title: string, icon: string) {
    modalState.value = { title, icon, isOpen: true };
  },
  close() {
    modalState.value = {
      title: "",
      icon: "",
      isOpen: false
    };
  }
};
