function Welcome({setFirstEntrer}) {
    const handleClick_setFirstEntrer = () => {
        setFirstEntrer(false);
    }

    return (
        <>
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">
                    Bienvenu dans la To-Do List la plus moderne , facile et optimisé.
                    Creer et on gere vos taches de maniere simple et efficace.
                </p>
                <button className="btn btn-primary" onClick={handleClick_setFirstEntrer}>Commencer</button>
            </div>
        </>
    );
}

export default Welcome;
