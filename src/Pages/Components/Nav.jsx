export default function Nav({setShowList, setFirstEntrer}) {
    const handleClick_setShowList = () => {
        setShowList(prev => !prev);
    }

    const handleClick_setFirstEntrer = () => {
        setFirstEntrer(false);

        if (setShowList) {
            setShowList(false);
        }
    }

    return <nav>
        <div className="navbar bg-base-100 shadow-sm" >
            <div className="flex-1">
                <p className="text-gray-200 text-xl font-bold ml-2">To-Do List</p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <button className={"btn btn-soft btn-accent"} onClick={() => handleClick_setShowList()}>
                        Tasks
                    </button>
                    <li>
                        <details>
                            <summary className={"btn btn-soft btn-accent mx-1"}>Menu</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 z-100">
                                <li >
                                    <button onClick={() => handleClick_setFirstEntrer()}>
                                        Add
                                    </button>

                                </li>
                                <li><a>Fini</a></li>
                                <li><a>Attente</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}