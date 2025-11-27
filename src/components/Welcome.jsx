import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="min-h-screen bg-fantasy-bg text-fantasy-text font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-fantasy-primary/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fantasy-primary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="z-10 text-center max-w-4xl w-full">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fantasy-accent to-fantasy-primary animate-fade-in-down">
                    Bienvenido
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-fantasy-accent/80 font-light tracking-wide animate-fade-in">
                    Aquí comienza tu aventura RPG.
                </p>

                <div className="grid md:grid-cols-2 gap-8 w-full">
                    {/* Login Box */}
                    <div className="bg-fantasy-dark/50 backdrop-blur-md border border-fantasy-primary/30 p-8 rounded-xl hover:border-fantasy-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="w-16 h-16 mb-6 rounded-full bg-fantasy-primary/10 flex items-center justify-center group-hover:bg-fantasy-primary/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-fantasy-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                        <p className="mb-8 text-lg text-center font-light">
                            Si tienes cuenta inicia sesión para comenzar el viaje
                        </p>
                        <Link
                            to="/login"
                            className="px-8 py-3 rounded-full bg-transparent border border-fantasy-primary text-fantasy-primary hover:bg-fantasy-primary hover:text-white transition-all duration-300 font-medium tracking-wider uppercase text-sm"
                        >
                            Iniciar Sesión
                        </Link>
                    </div>

                    {/* Register Box */}
                    <div className="bg-fantasy-dark/50 backdrop-blur-md border border-fantasy-primary/30 p-8 rounded-xl hover:border-fantasy-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="w-16 h-16 mb-6 rounded-full bg-fantasy-primary/10 flex items-center justify-center group-hover:bg-fantasy-primary/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-fantasy-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </div>
                        <p className="mb-8 text-lg text-center font-light">
                            Si no tienes cuenta, registrate aquí para iniciar tu viaje.
                        </p>
                        <Link
                            to="/register"
                            className="px-8 py-3 rounded-full bg-fantasy-primary text-white hover:bg-blue-600 transition-all duration-300 font-medium tracking-wider uppercase text-sm shadow-lg shadow-fantasy-primary/30"
                        >
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
