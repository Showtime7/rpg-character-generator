import React from 'react';
import { CLASSES } from '../data/options';

export default function ClassSelector({ onSelect, selectedRace }) {
    return (
        <div className="text-center animate-fade-in">
            <h2 className="text-3xl mb-2 text-fantasy-primary font-bold font-serif">Elige tu Clase</h2>
            <p className="text-fantasy-accent/60 mb-6 font-light">Como {selectedRace.name}, ¿cuál será tu camino?</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {CLASSES.map((cls) => (
                    <button
                        key={cls.id}
                        onClick={() => onSelect(cls)}
                        className="group bg-fantasy-dark/80 border border-fantasy-primary/30 p-6 rounded-xl hover:border-fantasy-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-fantasy-primary/20 backdrop-blur-sm"
                    >
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                            {cls.icon}
                        </div>
                        <h3 className="text-xl font-bold text-fantasy-text mb-2">{cls.name}</h3>
                        <p className="text-sm text-fantasy-accent/70">{cls.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
