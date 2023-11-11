import { atom } from "recoil";
import { Todo } from "../types/Todo";

export const addTodoState = atom<Array<Todo>>({
    key: "addTodoState",
    default: [],
});