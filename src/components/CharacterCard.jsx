import React from 'react';

export default function CharacterCard({ character, onReset }) {
    return (
        <div className="text-center animate-fade-in max-w-md mx-auto">
            <h2 className="text-3xl mb-8 text-fantasy-primary font-bold font-serif">¡Personaje Creado!</h2>

            <div className="bg-fantasy-dark/80 border border-fantasy-primary/50 p-8 rounded-xl shadow-2xl relative overflow-hidden backdrop-blur-md">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-fantasy-primary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-fantasy-primary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-fantasy-primary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fantasy-primary"></div>

                <div className="flex justify-center gap-4 mb-6 text-6xl filter drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                    <span title={character.race.name}>{character.race.icon}</span>
                    <span title={character.class.name}>{character.class.icon}</span>
                </div>

                <h3 className="text-4xl font-serif text-fantasy-text mb-2 font-bold">{character.name}</h3>
                <div className="text-fantasy-accent/80 text-lg mb-6">
                    <p>{character.race.name} • {character.class.name}</p>
                </div>

                <div className="space-y-4 text-left bg-black/30 p-4 rounded-lg border border-fantasy-primary/10">
                    <div>
                        <span className="text-fantasy-primary text-sm uppercase tracking-wider font-semibold">Raza</span>
                        <p className="text-fantasy-text/90">{character.race.description}</p>
                    </div>
                    <div>
                        <span className="text-fantasy-primary text-sm uppercase tracking-wider font-semibold">Clase</span>
                        <p className="text-fantasy-text/90">{character.class.description}</p>
                    </div>
                </div>
            </div>

            <button
                onClick={onReset}
                className="mt-8 text-fantasy-primary hover:text-white underline decoration-fantasy-primary/50 hover:decoration-fantasy-primary transition-all"
            >
                Crear otro personaje
            </button>
        </div>
    );
}
