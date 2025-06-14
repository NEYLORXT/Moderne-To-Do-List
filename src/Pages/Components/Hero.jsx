function Hero({ children}) {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen overflow-hidden pb-15">
                <div className="hero-content text-center w-[95%] md:w-[70%] lg:w-[60%]">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Hero;
