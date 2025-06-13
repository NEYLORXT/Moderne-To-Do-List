import {Pencil, Trash} from "lucide-react";
import {useState} from "react";
import {useTodo} from "./TodoContext.jsx";


export default function Todo({todo, index, setCurrentTodo, setEdit}){
    const [checked, setChecked] = useState(todo.isDone);


    const { editerTodo, deleteTodo } = useTodo();

    const updateTodo = (e) => {
        setChecked(e.target.checked);

        const newTodo = {
            id: todo.id,
            titre: todo.titre,
            description: todo.description,
            date: todo.date,
            priority: todo.priority,
            isDone: e.target.checked,
        }

        editerTodo(todo.id, newTodo);

    }

    const handleClick_deleteTodo = () => {
        deleteTodo(todo.id);
    }

    const handleClick_setCurrentTodo = () => {
        setCurrentTodo(todo);
        setEdit(true);
    }

    return(
        <div key={todo.id} className={`border-3 border-accent mb-3 rounded-tr-xl rounded-bl-xl bg-info-content ${checked ? "line-through" : ""}`}>

            <div className={"px-2 pt-2"}>
                <input type="checkbox" checked={checked} onChange={updateTodo} className="checkbox checkbox-primary" />
            </div>

            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">{todo.date}</li>
            <li className="list-row">
                <div className="text-4xl font-thin opacity-30 tabular-nums">{ ( ((index + 1 ) < 10 ) ? 0+""+ (index + 1) : index + 1 )}</div>
                <div>
                    <div>{todo.titre}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{todo.priority}</div>
                </div>
                <p className="list-col-wrap text-xs">
                    {todo.description}
                </p>

                <button className="btn btn-square btn-ghost hover:btn-info" onClick={handleClick_setCurrentTodo}>
                    <Pencil/>
                </button>

                <button className="btn btn-square btn-warning" onClick={handleClick_deleteTodo}>
                    <Trash/>
                </button>
            </li>
        </div>
    )
}