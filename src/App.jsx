import React, { useState } from 'react';
import RaceSelector from './components/RaceSelector';
import ClassSelector from './components/ClassSelector';
import NameInput from './components/NameInput';
import CharacterCard from './components/CharacterCard';

function App() {
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
    <div className="min-h-screen bg-medieval-brown text-medieval-parchment font-sans selection:bg-medieval-gold selection:text-medieval-brown flex flex-col items-center py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-medieval-gold mb-2 drop-shadow-lg">
          Forja de Héroes
        </h1>
        <div className="h-1 w-32 bg-medieval-gold mx-auto rounded-full opacity-50"></div>
      </header>

      <main className="w-full max-w-5xl">
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

      <footer className="mt-auto pt-12 text-medieval-parchment/30 text-sm">
        <p>Generador de Personajes RPG • v1.0</p>
      </footer>
    </div>
  );
}

export default App;
