import React from 'react';
import { RACES } from '../data/options';

export default function RaceSelector({ onSelect }) {
    return (
        <div className="text-center animate-fade-in">
            <h2 className="text-3xl mb-6 text-medieval-gold font-bold">Elige tu Raza</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {RACES.map((race) => (
                    <button
                        key={race.id}
                        onClick={() => onSelect(race)}
                        className="group bg-medieval-brown/90 border-2 border-medieval-gold/30 p-6 rounded-lg hover:border-medieval-gold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-medieval-gold/20"
                    >
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {race.icon}
                        </div>
                        <h3 className="text-xl font-bold text-medieval-parchment mb-2">{race.name}</h3>
                        <p className="text-sm text-medieval-parchment/70">{race.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
