import React from 'react';

export default function CharacterCard({ character, onReset }) {
    return (
        <div className="text-center animate-fade-in max-w-md mx-auto">
            <h2 className="text-3xl mb-8 text-medieval-gold font-bold">¡Personaje Creado!</h2>

            <div className="bg-medieval-brown border-4 border-medieval-gold/50 p-8 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-medieval-gold"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-medieval-gold"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-medieval-gold"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-medieval-gold"></div>

                <div className="flex justify-center gap-4 mb-6 text-6xl">
                    <span title={character.race.name}>{character.race.icon}</span>
                    <span title={character.class.name}>{character.class.icon}</span>
                </div>

                <h3 className="text-4xl font-serif text-medieval-gold mb-2">{character.name}</h3>
                <div className="text-medieval-parchment/80 text-lg mb-6">
                    <p>{character.race.name} • {character.class.name}</p>
                </div>

                <div className="space-y-4 text-left bg-black/20 p-4 rounded">
                    <div>
                        <span className="text-medieval-gold text-sm uppercase tracking-wider">Raza</span>
                        <p className="text-medieval-parchment">{character.race.description}</p>
                    </div>
                    <div>
                        <span className="text-medieval-gold text-sm uppercase tracking-wider">Clase</span>
                        <p className="text-medieval-parchment">{character.class.description}</p>
                    </div>
                </div>
            </div>

            <button
                onClick={onReset}
                className="mt-8 text-medieval-gold hover:text-medieval-parchment underline decoration-medieval-gold/50 hover:decoration-medieval-gold transition-all"
            >
                Crear otro personaje
            </button>
        </div>
    );
}
