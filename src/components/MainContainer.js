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
            <div key={dish.id} >
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
                <button id='main' onClick={()=>handleButtonClick('All')}>All</button>           
                <button id='filter-btn-1' onClick={()=>handleButtonClick('breakfast')} data-test-id="menu-item-breakfast">Breakfast</button>
                <button id='filter-btn-3' onClick={()=>handleButtonClick('lunch')} data-test-id="menu-item-lunch">Lunch</button>
                <button id='filter-btn-2' onClick={()=>handleButtonClick('shakes')} data-test-id="menu-item-shakes">Shakes</button>
            </div>

            <div className='dishes'>
               {renderDishes()}
            </div>
        </div>
    );
}

export default MainContainer;
