import React from 'react';
import { RACES } from '../data/options';

export default function RaceSelector({ onSelect }) {
    return (
        <div className="text-center animate-fade-in">
            <h2 className="text-3xl mb-6 text-fantasy-primary font-bold font-serif">Elige tu Raza</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {RACES.map((race) => (
                    <button
                        key={race.id}
                        onClick={() => onSelect(race)}
                        className="group bg-fantasy-dark/80 border border-fantasy-primary/30 p-6 rounded-xl hover:border-fantasy-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-fantasy-primary/20 backdrop-blur-sm"
                    >
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                            {race.icon}
                        </div>
                        <h3 className="text-xl font-bold text-fantasy-text mb-2">{race.name}</h3>
                        <p className="text-sm text-fantasy-accent/70">{race.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
