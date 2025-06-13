export default function Nav({setShowList}) {
    const handleClick_setShowList = () => {
        setShowList(prev => !prev);
    }
    return <nav>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <p className="text-gray-200 text-xl font-bold ml-2">To-Do List</p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <button className={"btn btn-accent"} onClick={() => handleClick_setShowList()}>
                        Tasks
                    </button>
                    <li>
                        <details>
                            <summary className={"btn btn-accent mx-1"}>Menu</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
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