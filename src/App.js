import React, {useState} from "react";
import './App.css';

const pokemons = {
    1: {
        name: 'Bulbasaur',
        height: '2\' 04"',
        weight: '15.2 lbs',
        category: 'Seed',
        abilities: 'Overgrow',
        img: require('./img/001.png')
    },
    2: {
        name: 'Ivysaur',
        height: '3\' 03"',
        weight: '28.7 lbs',
        category: 'Seed',
        abilities: 'Overgrow',
        img: require('./img/002.png')
    },
    3: {
        name: 'Venusaur',
        height: '6\' 07"',
        weight: '220.5 lbs',
        category: 'Seed',
        abilities: 'Overgrow',
        img: require('./img/003.png')
    },
    4: {
        name: 'Charmander',
        height: '2\' 00"',
        weight: '18.7 lbs',
        category: 'Lizard',
        abilities: 'Blaze',
        img: require('./img/004.png')
    }
};

function App() {
    const [currentChoice, setCurrentChoice] = useState(0);

    const handleSelect = (id) => {
        setCurrentChoice(parseInt(id));
    };

    const handleBtn = (act) => {

        if(act === 'next') {
            if(currentChoice > Object.keys(pokemons).length - 1) {
                setCurrentChoice(1);
            } else {
                setCurrentChoice(currentChoice + 1);
            }
        }

        if(act === 'prev') {
            if(currentChoice < 2) {
                setCurrentChoice(Object.keys(pokemons).length);
            } else {
                setCurrentChoice(currentChoice - 1);
            }
        }
    };



    return (
        <div className="App">
            <select name="" id="" value={currentChoice} onChange={(e) => handleSelect(e.target.value)}>
                <option value="0" disabled={true}>Select Pokemon</option>
                <option value="1">Bulbasaur</option>
                <option value="2">Ivysaur</option>
                <option value="3">Venusaur </option>
                <option value="4">Charmander </option>
            </select>
            <div className={'display'}>
                <div className={'pokimon-img'}>
                    {currentChoice !== 0 && (
                        <img src={pokemons[currentChoice].img} alt=""/>
                    )}
                </div>
                <div className={'pokimon-details'}>
                    {currentChoice !== 0 && (
                        <ul>
                            <li>ID: {currentChoice}</li>
                            <li>name: {pokemons[currentChoice].name}</li>
                            <li>height: {pokemons[currentChoice].height}</li>
                            <li>weight: {pokemons[currentChoice].weight}</li>
                            <li>category: {pokemons[currentChoice].category}</li>
                        </ul>
                    )}
                </div>
            </div>

            <br/>

            <div className={'buttons'}>
                <button value={'prev'} onClick={() => handleBtn('prev')}>Prev</button>
                <button value={'next'} onClick={() => handleBtn('next')}>Next</button>
            </div>
        </div>
      );
}

export default App;
