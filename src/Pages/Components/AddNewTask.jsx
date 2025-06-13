import React, {useState} from "react";

export default function AddNewTask({ setFirstEntrer}) {
    const [isLoadingButton, setIsLoadingButton] = useState(false);

    const handleClick_setFirstEntrer = () => {
        handleClick_setLoadingButton(true);

        setTimeout(() => {
            handleClick_setLoadingButton(false);
            setFirstEntrer(true);
        }, 2000);

    }

    const handleClick_setLoadingButton = (value) => {
        setIsLoadingButton(value);
    }

    return ( <>
        <fieldset className="fieldset bg-base-200 border-white-300 rounded-box w-xs md:w-md border p-4 shadow-md shadow-gray-500 ">
            <legend className="fieldset-legend px-5">Create</legend>

            <label className="label text-gray-300">Titre</label>
            <input type="email" className="input w-full" placeholder="Email"/>

            <legend className="fieldset-legend text-gray-300">Description</legend>
            <textarea className="textarea h-24 w-full" placeholder="Bio"></textarea>

            <div className={ "flex flex-row gap-2 mt-2"}>
                <input type={"date"} className="input w-full" placeholder="Date"/>

                <select defaultValue="Pick a color" className="select">
                    <option disabled={true}>Priority</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>

            <button className="btn btn-success mt-4" onClick={ isLoadingButton? null : handleClick_setFirstEntrer}>
                { isLoadingButton? <span className="loading loading-bars loading-md"></span> : "Ajouter"}
            </button>
        </fieldset>
    </>)
}