import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Concern from './Components/Concern';
import Sunscreen from './Components/Sunscreen';

import Result from './Components/Result';
import Reels from './Components/Reels';
import Ingredients from './Components/Ingredients';
import Certifications from './Components/Certifications';
import Essentials from './Components/Essentials';
import EssentialsData from './Components/EssentialsData.json'
import Card from "./Components/Card"
import CardData from "./Components/CardData.json"






function App() {
 


  console.log(EssentialsData)
  return (
    <>
    



    <header>
      <Header/>
      <Navbar></Navbar>
    </header>
    <Slider className="Slider"></Slider>
    <div>
      {EssentialsData.map((data, index)=>(<Essentials EssentialsData={data}/>))}
    </div>
{CardData.map((data, index)=>(<Card CardData={data}/>))}



    
      
    
    


    </>
  );
}

export default App;
