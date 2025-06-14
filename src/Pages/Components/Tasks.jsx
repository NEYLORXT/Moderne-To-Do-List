
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
        <ul className={`list bg-base-100 mb-20 rounded-box w-full shadow-md text-left h-130 md:h-200 
        overflow-y-auto border-accent border-3 shadow-accent px-3 py-2 ${edit && "justify-center align-center"}`}>

            {
                !edit ? (todos.length > 0 ) ?

                    todos.map((todo, index) => {
                        return(
                            <Todo todo={todo} index={index} key={todo.id} setCurrentTodo={setCurrentTodo} setEdit={setEdit} />
                        )
                    })

                    :

                    <div className={"border-3 border-accent rounded-tr-xl rounded-bl-xl bg-info-content"}>
                        <p className="text-center text-2xl opacity-60 py-4 tracking-wide font-semibold text-accent ">
                            Aucune tache
                        </p>
                    </div>

                    :

                    <EditTask setFirstEntrer={setFirstEntrer} todo={currentTodo?? null} setEdit={setEdit}/>

            }


        </ul>
    )
}