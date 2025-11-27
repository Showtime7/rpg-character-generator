import React from 'react';
import { CLASSES } from '../data/options';

export default function ClassSelector({ onSelect, selectedRace }) {
    return (
        <div className="text-center animate-fade-in">
            <h2 className="text-3xl mb-2 text-medieval-gold font-bold">Elige tu Clase</h2>
            <p className="text-medieval-parchment/60 mb-6">Como {selectedRace.name}, ¿cuál será tu camino?</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {CLASSES.map((cls) => (
                    <button
                        key={cls.id}
                        onClick={() => onSelect(cls)}
                        className="group bg-medieval-brown/90 border-2 border-medieval-gold/30 p-6 rounded-lg hover:border-medieval-gold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-medieval-gold/20"
                    >
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {cls.icon}
                        </div>
                        <h3 className="text-xl font-bold text-medieval-parchment mb-2">{cls.name}</h3>
                        <p className="text-sm text-medieval-parchment/70">{cls.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
