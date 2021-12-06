import { useState } from 'react';
import { NavBar, Home, Store, Ideas, Contact, Search, Coctails, Coctail, CoctailIdeas } from './components';
import './App.css';
import arrow from '../src/slike/arrow.png'


const apiRoot = "https://www.thecocktaildb.com/api/json/v1/1/";
const searchPath = "search.php?s=";
const detailsPath = "lookup.php?i=";
const randomCoctailPath = "random.php";
const listIngredientsPath = "list.php?i=list";

function App() {
  
  const [navItemsActivity, setNavItemsActivity] = useState([
    {id:0, isactive:true},
    {id:1, isactive:false},
    {id:2, isactive:false},
    {id:3, isactive:false}
  ])
  const [input, setInput] = useState('');
  const [coctails, setCoctails] = useState([]);
  const [coctail, setCoctail] = useState('');
  const [coctailsActive, setCoctailsActive] = useState(false);
  const [coctailActive, setCoctailActive] = useState(false);

  const handleChange = (e) => {
    let newValue = e.target.value;
    setInput(newValue)
    
    if (newValue){
    const fetchCoctails = async() =>{
      const url = apiRoot + searchPath + newValue;
      const response = await fetch(url);
      const coctailsObj = await response.json();
      const coctails = coctailsObj.drinks;
      console.log(coctailsObj)
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
      console.log(coctail)
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
      console.log(randomCoctail);
      setCoctailActive(true);
      setCoctail(randomCoctail);
    }
    fetchRandom();
  }

  const navSelect = (e) =>{
    let id = e.target.id;
    let newNavItemsActivity = [...navItemsActivity];
    newNavItemsActivity.map((newNavItemActivity)=>{
      newNavItemActivity.isactive=false;
      if (newNavItemActivity.id == id){
        newNavItemActivity.isactive=true;
      }
    })
    console.log(newNavItemsActivity)
    console.log(navItemsActivity[1].isactive)
    setNavItemsActivity(newNavItemsActivity);
    }

    const handleShop = () =>{
      const newNavItemsActivity = [...navItemsActivity];
      newNavItemsActivity.map((newNavItemActivity)=>{
      newNavItemActivity.isactive=false; 
      if (newNavItemActivity.id == 1){
        newNavItemActivity.isactive=true;
      }})
      setNavItemsActivity(newNavItemsActivity);
    }

    const handleContact = () =>{
      const newNavItemsActivity = [...navItemsActivity];
      newNavItemsActivity.map((newNavItemActivity)=>{
      newNavItemActivity.isactive=false; 
      if (newNavItemActivity.id == 3){
        newNavItemActivity.isactive=true;
      }})
      setNavItemsActivity(newNavItemsActivity);
    }

  return (
    <div className="App">
      <NavBar navSelect={navSelect}/>
      
      {navItemsActivity[2].isactive && <Search changeInput={handleChange} input={input} getRandomCoctail={getRandomCoctail}/>}
      {coctails && navItemsActivity[2].isactive && <Coctails coctails={coctails} getDetails={getDetails} coctailsActive={coctailsActive}/>}
       {coctail && navItemsActivity[2].isactive &&<Coctail coctail={coctail} coctailActive={coctailActive}/>}
       {/* {(coctailsActive===false && coctailActive===false && navItemsActivity[2].isactive) && <CoctailIdeas arrow={arrow}/>} */}
       { navItemsActivity[0].isactive && <Home goToShop={handleShop} goToContact={handleContact}/>}
       {navItemsActivity[1].isactive && <Store apiRoot={apiRoot} listIngredientsPath={listIngredientsPath}/>}
       {/* {navItemsActivity[2].isactive && <Ideas />} */}
       {navItemsActivity[3].isactive && <Contact />}
    </div>
  );
}

export default App;
