// import Pokedex from "../pokedex";
import { picPokedex } from '../../src/assets/Pokédex_logo.png'


function StartPage() {
    return (
        <div>
            <div className='w-[80vh] mx-auto mt-8 border-2 rounded-lg font-poppins bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 via-amber-500 to-yellow-400'>
                <img src={picPokedex} alt="" />

            </div>
        </div>
    );
}

export default StartPage;