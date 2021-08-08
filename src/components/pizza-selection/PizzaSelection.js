import React, { useEffect, useState } from 'react';
import './PizzaSelection.css';

const PizzaSelection = ({prevStep, nextStep, handleChange, values }) => {

    const PIZZA_SIZES = [
        {
            size: "small",
            price: 15,
            label: "Small ($15)"
        },
        {
            size: "medium",
            price: 20,
            label: "Medium ($20)"
        },
        {
            size: "large",
            price: 25,
            label: "Large ($20)"
        }
    ];

    const TOPPINGS = [
        {
            label: "Olives (+$3)",
            price: 3,
            name: "olives"
        },
        {
            label: "Pepperoni (+$4)",
            price: 4,
            name: "pepperoni"
        },
        {
            label: "Mushrooms (+$2)",
            price: 2,
            name: "mushrooms"
        }
    ];

    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedPizza, setSelectedPizza] = useState({});
    const [selectedToppings, setSelectedToppings] = useState([]);

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    useEffect(() => {
        calculatePrice();
    },[selectedPizza, selectedToppings]);

    const handleSizeClick = (index) => {
        let selection = PIZZA_SIZES[index];
        setSelectedPizza(selection);
        handleChange("pizza_size", selection.label);
    }

    const handleToppingClick = (e, index) => {
        let isChecked = e.target.checked;
        let topping = TOPPINGS[index];

        if(isChecked) {
            if(!isToppingExist(topping.name)) {
                setSelectedToppings(toppings => [...toppings, topping]);
                handleChange(topping.name, true);
            }
        } else {
            let updatedToppings = selectedToppings;
            updatedToppings = updatedToppings.filter((item) => item.name !== topping.name);
            setSelectedToppings(updatedToppings);
            handleChange(topping.name, false);
        }
    }

    const isToppingExist = (name) => {
        let items = selectedToppings;
        let isExist = items.some((topping) => topping.name === name);
        return isExist;
    }

    const calculatePrice = () => {
        if(selectedPizza && selectedPizza.price) {
            let pizaPrice = selectedPizza.price;

            selectedToppings.forEach((item) => {
                pizaPrice = pizaPrice + item.price;
            });
    
            setTotalPrice(pizaPrice);
            handleChange('total_price', pizaPrice);
        }
    }

    return (
        <div>
            <div className="pizza-selection">
                <p>Choose one of the 3 pizza sizes:</p>
                { 
                    PIZZA_SIZES.map((pizza, index) => {
                        return(
                            <div key={index}>
                                <input type="radio" 
                                    id={pizza.size} 
                                    name="pizza_size" 
                                    value={pizza.label} 
                                    onClick={(e) => handleSizeClick(index)}
                                />
                                <label htmlFor={pizza.size}>{pizza.label}</label>
                            </div> 
                        )   
                    })
                }
            </div>

            <div className="toppings-selection">
                <p>Choose any combination of the following toppings:</p>

                {
                    TOPPINGS.map((toppings, index) => {
                        return(
                            <div key={index}>
                                <input type="checkbox" 
                                    id={toppings.name} 
                                    name={toppings.name} 
                                    value={toppings.label} 
                                    onClick={(e) => handleToppingClick(e, index)} 
                                    />
                                <label htmlFor={toppings.name}>{toppings.label}</label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="total-price"><span>Total Price ${totalPrice}</span></div>
            <button onClick={Previous}>Previous Step</button>
            <button onClick={Continue}>Continue</button>
        </div>
    )
}

export default PizzaSelection;