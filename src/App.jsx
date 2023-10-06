import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import pokedex from '../src/assets/Pokédex_logo.png'

function App() {
  const [poke, setPoke] = useState(null);
  const [number, setNumber] = useState(1);

  const loadPoke = useCallback(async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
      setPoke(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [number]);

  useEffect(() => {
    const abortController = new AbortController();

    loadPoke();

    return () => {
      abortController.abort();
    };
  }, [loadPoke]);

  const prevPoke = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  const nextPoke = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div>
      <div className='w-[80vh] mx-auto capitalize mt-8 border-2 rounded-lg font-poppins bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 via-amber-500 to-yellow-400'>
        <div className='grid grid-rows-[fr_7fr_1fr] h-[90vh] overflow-hidden'>
          <div className='mx-auto h-10 mt-5 '><img className='h-24' src={pokedex} alt="PokeDex_Logo" /></div>
          <div className='grid'>
            <img className=' w-1/2 mx-auto' src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
            <div className='grid mx-20'>
              <div className='text-2xl text-center h-10 w-36 mx-auto py-2 rounded-md mb-3'>{poke?.name}</div>
              <div className=' rounded-md bg-gray-300 pb-2 pt-5 px-5 gap-x-3'>
                <div className='grid grid-cols-2'>
                  <div><span className='font-semibold'>Height :</span><span> {poke?.height}</span></div>
                  <div><span className='font-semibold'>Weight :</span><span> {poke?.weight}</span></div>
                </div>

                <div className='grid grid-cols-2'>
                  <p className='font-semibold'>Types : </p>
                  <ul className='grid'>
                    {poke?.types?.map((tp, idx) => (
                      <li key={idx}>{tp?.type?.name}</li>
                    ))}
                  </ul>
                </div>

                <div className='grid grid-cols-2'>
                  <p className='font-semibold'>Abilities : </p>
                  <ul className='grid'>
                    {poke?.abilities?.map((abil, idx) => (
                      <li key={idx}>{abil.ability.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex gap-x-8 mx-auto justify-center items-end mt-3' >
              <button className='rounded-md bg-gray-300 px-3 py-2' onClick={prevPoke}>
                Previous
              </button>
              <button className='rounded-md bg-gray-300 px-7 py-2' onClick={nextPoke}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
