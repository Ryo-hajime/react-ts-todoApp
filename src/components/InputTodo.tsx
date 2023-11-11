import "./InputTodo.css"
import { inputTodoState } from "../states/inputTodoState"
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { addTodoState } from "../states/addTodoState";

const getKey = () => Math.random();

const today = new Date;
const postDate = today.getFullYear() + "/" +  (today.getMonth() + 1) + "/"+ today.getDate();

export const InputTodo = () => {
  const [inputTodo, setInputTodo] = useRecoilState(inputTodoState);
  const [addTodo, setAddTodo] = useRecoilState(addTodoState);

  const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  }, [inputTodo])

  const onClickAdd = () => {
    if(inputTodo === "") return;
    setAddTodo([...addTodo, {id: getKey(), title: inputTodo, date: postDate, flag: false}]);
    setInputTodo("");
    console.log(addTodo);
  }

  return (
    <div className="InputTodo">
        <input type="text" className="inputField" onChange={onChange} value={inputTodo} placeholder="Todoを入力" />
        <button data-testid="addBtn" type="button" className="inputBtn" onClick={onClickAdd}>追加</button>
    </div>
  )
}
