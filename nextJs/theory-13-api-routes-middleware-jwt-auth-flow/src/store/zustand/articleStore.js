import { selectArticleById } from "@/app/api/articleApi";
import { create } from "zustand";

export const useArticleStore = create((set) => ({
    isModalOpen: false,
    modalType: "add",
    selectedArticle: null,

    openModal: (type, article = null) => set({isModalOpen: true, modalType: TypeError, selectedArticle: article}),
    closeModal: () => set({isModalOpen: false, selectedArticle: null}),
}));