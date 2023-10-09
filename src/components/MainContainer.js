import React,{useState} from 'react';
import { dishes } from './dishes';

const MainContainer = () => {
    const [currentCategory,setCurrentCatagory]=useState('');

    const handleButtonClick=(category)=>{
        setCurrentCatagory(category);
    }
    

    const renderDishes=()=>{
        const dishList=
        currentCategory==='All'?dishes:
        dishes.filter((dish)=>dish.category===currentCategory);

        return dishList.map((dish)=>(
            <div key={dish.id}>
                <img src={dish.img} alt={dish.title}/>
                <h1>{dish.title}</h1>
                <p>${dish.price}</p>
                <p>{dish.desc}</p>
            </div>
        ));
    };
   

    return (
        <div>
            <div className='navbar'>
            <h1>Our Menu</h1>
                <button onClick={()=>handleButtonClick('All')}>All</button>           
                <button onClick={()=>handleButtonClick('breakfast')}>Breakfast</button>
                <button onClick={()=>handleButtonClick('lunch')}>Lunch</button>
                <button onClick={()=>handleButtonClick('shakes')}>Shakes</button>
            </div>

            <div className='dishes'>
               {renderDishes()}
            </div>
        </div>
    );
}

export default MainContainer;
