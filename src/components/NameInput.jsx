import React, { useState } from 'react';

export default function NameInput({ onNameSubmit, selectedRace, selectedClass }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onNameSubmit(name);
        }
    };

    return (
        <div className="text-center animate-fade-in max-w-md mx-auto">
            <h2 className="text-3xl mb-2 text-medieval-gold font-bold">Nombra a tu Héroe</h2>
            <p className="text-medieval-parchment/60 mb-8">
                Un {selectedRace.name} {selectedClass.name} necesita un nombre digno.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Escribe un nombre..."
                    className="bg-medieval-brown/50 border-b-2 border-medieval-gold/50 text-medieval-parchment text-2xl text-center py-2 focus:outline-none focus:border-medieval-gold transition-colors placeholder-medieval-parchment/30"
                    autoFocus
                />

                <button
                    type="submit"
                    disabled={!name.trim()}
                    className="bg-medieval-crimson text-medieval-parchment font-bold py-3 px-8 rounded border-2 border-medieval-gold/50 hover:bg-red-900 hover:border-medieval-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                    Comenzar Aventura
                </button>
            </form>
        </div>
    );
}
