import {useState} from 'react';
import "./Animals.css";
import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import horse from "./svg/horse.svg"
import gator from "./svg/gator.svg"
import heart from "./svg/heart.svg"


const svgMap = {
    bird,
    cat,
    dog,
    horse,
    gator,
    cow
};

function TypeAnimals({type}){

    const [clicks, setClicks] = useState(0);

   const handleClick = () =>{
        setClicks(clicks + 1);
   }
    return (
        <div className = "animal-show" onClick = {handleClick}>
             <img className = "animal"  src = {svgMap[type]} 
             alt = "animal"
             style = {{maxWidth: 100 + 'px'}} />
             <img className = "heart" src = {heart} 
             alt = "heart"  
             style={{width: 10 + 10 * clicks + 'px'}}/>
        </div>
    );
}

export default TypeAnimals;