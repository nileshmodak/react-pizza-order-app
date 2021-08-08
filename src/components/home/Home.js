import React, { useState } from "react"; 
import UserDetails from '../user-details/UserDetails';
import PizzaSelection from '../pizza-selection/PizzaSelection';
import PaymentInformation from "../payment-information/PaymentInformation";
import Checkout from "../checkout/Checkout";

const Home = () => {
    const [step, setStep] = useState(1);
    const [inputField , setInputField] = useState({
        name: '',
        street_name: '',
        house_number: '',
        postal_code: '',
        city:'',
        phone_number:'',
        total_price: 0,
        pizza_size: '',
        card_number:'',
        month: '',
        year: '',
        cvv: ''
    });

    // go back to previous step
    const prevStep = () => {
        setStep(step - 1);
    }

    // proceed to the next step
    const nextStep = () => {
        setStep(step + 1);
    }

    // handle field change
    const handleInputFieldChange = input => e => {
        setInputField({...inputField, [input]: e.target.value});
    }

    const handleFieldSelection = (fieldName, value) => {
        setInputField({...inputField, [fieldName]: value});
    }

    switch(step) {
        case 1: 
          return (
            <UserDetails 
              nextStep={nextStep}
              handleChange={handleInputFieldChange}
              values={{inputField}}
            />
          )
        case 2: 
          return (
            <PizzaSelection 
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleFieldSelection}
              values={{inputField}}
            />
          )
        case 3: 
            return (
              <PaymentInformation 
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleFieldSelection}
                values={{inputField}}
              />
            )
          case 4: 
            return (
              <Checkout 
                prevStep={prevStep}
                values={{...inputField}}
              />
            )
        default: 
            // do nothing
      }
};

export default Home;