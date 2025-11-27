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
            <h2 className="text-3xl mb-2 text-fantasy-primary font-bold font-serif">Nombra a tu Héroe</h2>
            <p className="text-fantasy-accent/60 mb-8 font-light">
                Un {selectedRace.name} {selectedClass.name} necesita un nombre digno.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Escribe un nombre..."
                    className="bg-fantasy-dark/50 border-b-2 border-fantasy-primary/50 text-fantasy-text text-2xl text-center py-2 focus:outline-none focus:border-fantasy-primary transition-colors placeholder-fantasy-accent/30"
                    autoFocus
                />

                <button
                    type="submit"
                    disabled={!name.trim()}
                    className="bg-fantasy-primary text-white font-bold py-3 px-8 rounded-lg border border-fantasy-primary/50 hover:bg-blue-600 hover:border-fantasy-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-lg shadow-fantasy-primary/20"
                >
                    Comenzar Aventura
                </button>
            </form>
        </div>
    );
}
