import React, { useState} from "react";

import Header from "./Components/Header.jsx";
import Welcome from "./Components/Welcome.jsx";
import Hero from "./Components/Hero.jsx";
import AddNewTask from "./Components/AddNewTask.jsx";
import Tasks from "./Components/Tasks.jsx";


export default function Index() {

    const [firstEntrer, setFirstEntrer] = useState(true);
    const [showList, setShowList] = useState(false);

    return <>
        <main className={ "min-h-screen"}>
            <Header setShowList={setShowList}/>

            { ( showList ) && <Hero children={<Tasks setFirstEntrer={setFirstEntrer}  />} /> }

            { ( !showList && firstEntrer ) && <Hero children={<Welcome setFirstEntrer={setFirstEntrer} />} /> }

            { ( !showList && !firstEntrer ) && <Hero children={<AddNewTask setFirstEntrer={setFirstEntrer}  />} /> }


        </main>
    </>
}