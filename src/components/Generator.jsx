import React, { useState } from 'react';
import RaceSelector from './RaceSelector';
import ClassSelector from './ClassSelector';
import NameInput from './NameInput';
import CharacterCard from './CharacterCard';

const Generator = () => {
    const [step, setStep] = useState('race'); // race, class, name, result
    const [character, setCharacter] = useState({
        race: null,
        class: null,
        name: '',
    });

    const handleRaceSelect = (race) => {
        setCharacter((prev) => ({ ...prev, race }));
        setStep('class');
    };

    const handleClassSelect = (cls) => {
        setCharacter((prev) => ({ ...prev, class: cls }));
        setStep('name');
    };

    const handleNameSubmit = (name) => {
        setCharacter((prev) => ({ ...prev, name }));
        setStep('result');
    };

    const handleReset = () => {
        setCharacter({ race: null, class: null, name: '' });
        setStep('race');
    };

    return (
        <div className="min-h-screen bg-fantasy-bg text-fantasy-text font-sans selection:bg-fantasy-primary selection:text-white flex flex-col items-center py-12 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[50%] h-[50%] bg-fantasy-primary/10 rounded-full blur-[120px]"></div>
            </div>

            <header className="mb-12 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-fantasy-accent to-fantasy-primary mb-2 drop-shadow-lg animate-fade-in-down">
                    Forja de Héroes
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-fantasy-primary to-transparent mx-auto rounded-full opacity-70"></div>
            </header>

            <main className="w-full max-w-5xl z-10">
                {step === 'race' && (
                    <RaceSelector onSelect={handleRaceSelect} />
                )}

                {step === 'class' && (
                    <ClassSelector
                        onSelect={handleClassSelect}
                        selectedRace={character.race}
                    />
                )}

                {step === 'name' && (
                    <NameInput
                        onNameSubmit={handleNameSubmit}
                        selectedRace={character.race}
                        selectedClass={character.class}
                    />
                )}

                {step === 'result' && (
                    <CharacterCard
                        character={character}
                        onReset={handleReset}
                    />
                )}
            </main>

            <footer className="mt-auto pt-12 text-fantasy-accent/30 text-sm z-10">
                <p>Generador de Personajes RPG • v1.0</p>
            </footer>
        </div>
    );
};

export default Generator;
