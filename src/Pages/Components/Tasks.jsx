
import {
    Pencil,
    Trash,
} from 'lucide-react';
import {useTodo} from "./TodoContext.jsx";
import Todo from "./Todo.jsx";
import {useState} from "react";
import EditTask from "./EditTask.jsx";

export default function Tasks({ setFirstEntrer}) {
    const { todos } = useTodo();
    const [currentTodo, setCurrentTodo] = useState(null);

    const [edit, setEdit] = useState(false);

    return (
        <ul className={`list bg-base-100 rounded-box shadow-md text-left w-170 h-200 overflow-y-auto border-accent border-3 shadow-accent px-3 py-2 ${edit && "justify-center align-center"}`}>

            {
                !edit ? (todos.length > 0 ) ?

                    todos.map((todo, index) => {
                        return(
                            <Todo todo={todo} index={index} key={todo.id} setCurrentTodo={setCurrentTodo} setEdit={setEdit} />
                        )
                    })

                    :

                    <div className={"border-3 border-accent mb-3 rounded-tr-xl rounded-bl-xl bg-info-content"}>

                        <div className={"px-2 pt-2"}>
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                        </div>

                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">.. / .. / ..</li>
                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                            <div>
                                <div>XXX</div>
                                <div className="text-xs uppercase font-semibold opacity-60">User</div>
                            </div>
                            <p className="list-col-wrap text-xs">
                                Il n y a pas de tache a l horizon
                            </p>

                            <button className="btn btn-square btn-ghost hover:btn-info">
                                <Pencil/>
                            </button>

                            <button className="btn btn-square btn-warning">
                                <Trash/>
                            </button>
                        </li>
                    </div>

                    :

                    <EditTask setFirstEntrer={setFirstEntrer} todo={currentTodo?? null} setEdit={setEdit}/>

            }


        </ul>
    )
}