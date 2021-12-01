import { useState } from 'react';
import { Search, Coctails, Coctail, CoctailIdeas } from './components';
import './App.css';
import arrow from '../src/slike/arrow.png'


const apiRoot = "https://www.thecocktaildb.com/api/json/v1/1/";
const searchPath = "search.php?s=";
const detailsPath = "lookup.php?i=";
const randomCoctailPath = "random.php"

function App() {
  const [input, setInput] = useState('');
  const [coctails, setCoctails] = useState([]);
  const [coctail, setCoctail] = useState('');
  const [coctailsActive, setCoctailsActive] = useState(false);
  const [coctailActive, setCoctailActive] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    if (input){
    let text = input.trim();
    const fetchCoctails = async() =>{
      const url = apiRoot + searchPath + text;
      const response = await fetch(url);
      const coctailsObj = await response.json();
      const coctails = coctailsObj.drinks;
      setCoctailsActive(true);
      setCoctails(coctails);
    }
    fetchCoctails()
    }
    else{
      setCoctailsActive(false);
      setCoctailActive(false);
    }
  }

  const getDetails = (idDrink) =>{
    const fetchDetails = async() =>{
      const url = apiRoot + detailsPath + idDrink;
      const response = await fetch(url);
      const detailsObj = await response.json();
      const coctail = detailsObj.drinks[0];
      setCoctail(coctail);
      setCoctailActive(true);

    }
    fetchDetails();
  }

  const getRandomCoctail = () =>{
    const fetchRandom = async() =>{
      const url = apiRoot + randomCoctailPath;
      const response = await fetch(url);
      const randomObj = await response.json();
      const randomCoctail = randomObj.drinks[0];
      setCoctail(randomCoctail);
    }
    fetchRandom();
  }

  return (
    <div className="App">
      <Search changeInput={handleChange} input={input} getRandomCoctail={getRandomCoctail}/>
      {coctails && <Coctails coctails={coctails} getDetails={getDetails} coctailsActive={coctailsActive}/>}
       {coctail && <Coctail coctail={coctail} coctailActive={coctailActive}/>}
       {coctailsActive===false && <CoctailIdeas arrow={arrow}/>}
    </div>
  );
}

export default App;
