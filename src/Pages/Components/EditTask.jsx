import React, {useState} from "react";
import {useTodo} from "./TodoContext.jsx";
import {ChevronLeft} from "lucide-react";

export default function EditTask({ setFirstEntrer, todo, setEdit}) {
    const [isLoadingButton, setIsLoadingButton] = useState(false);

    const { editerTodo } = useTodo();

    const handleUpdateTask = (formData) => {
        handleClick_setLoadingButton(true);


        if (formData.get('titre') === "" || formData.get('titre').length < 3) {
            setTimeout(() => {
                handleClick_setLoadingButton(false)
            }, 700);
            return;
        }

        if (formData.get('description') === "" || formData.get('description').length < 3) {
            setTimeout(() => {
                handleClick_setLoadingButton(false)
            }, 700);

            return;
        }
        if (formData.get('date') === "") {
            setTimeout(() => {
                handleClick_setLoadingButton(false)
            }, 700);

            return;
        }
        if (formData.get('priority') === "") {
            setTimeout(() => {
                handleClick_setLoadingButton(false)
            }, 700);
            return;
        }

        setTimeout(() => {
            handleClick_setLoadingButton(false)

            const newTodo = {
                id: todo.id,
                titre: formData.get('titre'),
                description: formData.get('description'),
                date: formData.get('date'),
                priority: formData.get('priority'),
                isDone: todo.isDone,
            }

            console.log(newTodo);



            editerTodo(todo.id, newTodo);

            setFirstEntrer(true);
            setEdit(false);
        }, 2000);




    }

    const handleClick_setLoadingButton = (value) => {
        setIsLoadingButton(value);
    }


    return ( <>
        <form action={handleUpdateTask} className="flex flex-col mx-auto">
            <fieldset className="fieldset relative bg-base-200 border-white-300 rounded-box w-xs md:w-md border p-4 shadow-md shadow-gray-500 ">
                <legend className="fieldset-legend px-5">UPDATE TASK</legend>

                <button className="btn btn-soft btn-warning my-3 absolute top-0 left-4 "
                        onClick={() => setEdit(false)}>
                    <ChevronLeft />
                </button>

                <label className="label text-gray-300 mt-15">Titre</label>
                <input type="text" name={'titre'} defaultValue={todo?.titre} className="input w-full" placeholder="Titre"/>

                <legend className="fieldset-legend text-gray-300">Description</legend>
                <textarea className="textarea h-24 w-full" defaultValue={todo?.description} name={'description'} placeholder="Bio"></textarea>

                <div className={ "flex flex-row gap-2 mt-2"}>
                    <input type={"date"} defaultValue={todo?.date} name={'date'} className="input w-full" placeholder="Date"/>

                    <select defaultValue={todo?.priority} className="select" name={'priority'}>
                        <option disabled={true}>Priority</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>

                <button className="btn btn-soft btn-success mt-4">
                    { isLoadingButton? <span className="loading loading-bars loading-md"></span> : "Update"}
                </button>
            </fieldset>
        </form>
    </>)
}