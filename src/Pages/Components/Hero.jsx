function Hero({ children}) {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Hero;
