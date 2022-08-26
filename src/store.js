import create from "zustand";

export const useStore = create((set) => ({
  html: "",
  setHtml: (html) => set({ html }),
  borderColor: "red",
  setBorderColor: (borderColor) => set({ borderColor }),
}));
