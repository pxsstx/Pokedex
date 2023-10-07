import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import picPokedex from '../../src/assets/Pokédex_logo copy.png'
import imageURL from '../../src/assets/backgroud.jpg'

function Pokedex() {
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
    <div className=' lg:w-[80vh] sm:mx-auto mx-3 sm:w-5/6 h-auto sm:mt-4 mt-20'>
      <div className="lg:w-[80vh] mx-auto capitalize mt-8 border-2 rounded-lg font-poppins bg-cover bg-center" style={{
            backgroundImage: `url(${imageURL})`,
          }}>
        <div className='grid grid-rows-[fr_7fr_1fr] lg:h-[90vh] h-auto overflow-hidden'>
          <div className='mx-auto h-10 mt-5 '><img className='h-24' src={picPokedex} alt="PokeDex_Logo" /></div>
          <div className='grid lg:mt-3 mt-14'>
            <img className=' w-1/2 mx-auto' src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
            <div className='grid mx-3 lg:mx-14'>
              <div className='text-2xl text-center h-10 w-36 mx-auto py-2 rounded-md mb-3 font-semibold'>{poke?.name}</div>
              <div className=' rounded-md bg-bgColor pb-2 pt-5 px-5 gap-x-3 text-white'>
                <div className='grid grid-cols-2'>
                  <div><span className='font-semibold'>Height :</span><span> {poke?.height}</span></div>
                  <div><span className='font-semibold'>Weight :</span><span> {poke?.weight}</span></div>
                </div>

                <div className='grid grid-cols-2'>
                  <p className='font-semibold'>Types : </p>
                  <ul className='grid'>
                    {poke?.types?.map((tp, idx) => (
                      <li key={idx}>{tp?.type?.name} </li>
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
            <div className='flex gap-x-8 mx-auto justify-center items-end mt-3 mb-5' >
              <button className='rounded-md bg-white px-3 py-2' onClick={prevPoke}>
                Previous
              </button>
              <button className='rounded-md bg-white px-7 py-2' onClick={nextPoke}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
