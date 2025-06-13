import Navbar from "./nav.jsx";

export default function Header({ setShowList, setFirstEntrer}) {
    return <header>
        <Navbar setShowList={setShowList} setFirstEntrer={setFirstEntrer} />

    </header>
}