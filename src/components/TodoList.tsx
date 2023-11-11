import { useRecoilState } from "recoil";
import "./TodoList.css";
import { addTodoState } from "../states/addTodoState";

export const TodoList = () => {

    const [addTodo, setAddTodo] = useRecoilState(addTodoState);
    
    const onClickDelete = (id: number) => {
        const index = addTodo.findIndex(todo => todo.id === id);
        if (index !== -1) {
            const newTodo = [...addTodo];
            newTodo.splice(index, 1);
            setAddTodo(newTodo);
        }
    }

    const onClickComplete = (id: number) => {
        const newTodo = addTodo.map((todo) => {
            if (todo.id === id) {
                return { ...todo, flag: !todo.flag };
            }
            return todo;
        });
        setAddTodo(newTodo);
    }

    return (
        <>
            <div className="list">
                <h2>未完了リスト</h2>
                {addTodo.filter((todo) => !todo.flag).map((todo) => (
                    <li key={todo.id} className="list-row">
                        <div className="list-row_txt">
                            <small>{todo.date}</small>
                            <p>{todo.title}</p>
                        </div>
                        <button onClick={() => onClickDelete(todo.id)}>削除</button>
                        <button onClick={() => onClickComplete(todo.id)}>完了</button>
                    </li>
                ))}
            </div>
            <div className="list">
                <h2>完了リスト</h2>
                {addTodo.filter((todo) => todo.flag).map((todo) => (
                    <li key={todo.id} className="list-row">
                        <div className="list-row_txt">
                            <small>{todo.date}</small>
                            <p>{todo.title}</p>
                        </div>
                        <button onClick={() => onClickDelete(todo.id)}>削除</button>
                        <button onClick={() => onClickComplete(todo.id)}>戻す
                        </button>
                    </li>
                ))}
            </div>
        </>
    )
}
