
import {
    Pencil,
    Trash,
} from 'lucide-react';

export default function Tasks({ setFirstEntrer}) {
    return (
        <ul className="list bg-base-100 rounded-box shadow-md text-left w-170
        h-200 overflow-y-auto border-accent border-3 shadow-accent px-3 py-2 ">

            <div className={"border-3 border-accent mb-3 rounded-tr-xl rounded-bl-xl bg-info-content"}>

                <div className={"px-2 pt-2"}>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                </div>

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                    <div>
                        <div>Titre</div>
                        <div className="text-xs uppercase font-semibold opacity-60">User</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s
                        success
                        propelled Sabrino into the spotlight, solidifying their status as a rising star.
                    </p>

                    <button className="btn btn-square btn-ghost hover:btn-info">
                        <Pencil/>
                    </button>

                    <button className="btn btn-square btn-warning">
                        <Trash/>
                    </button>
                </li>
            </div>


        </ul>
    )
}