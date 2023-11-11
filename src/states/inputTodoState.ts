import { atom } from "recoil";

export const inputTodoState = atom<string>({
    key: "inputTodoState",
    default: "",
});