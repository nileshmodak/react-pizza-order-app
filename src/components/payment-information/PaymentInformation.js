import React, { useEffect, useState } from 'react';
import valid from 'card-validator';

const PaymentInformation = ({prevStep, nextStep, handleChange, values }) => {

    const [showDate, setShowDate] = useState(false);
    const [showSecurityCode, setshowSecurityCode] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    useEffect(() => {
        validateExpiryDate();
    },[month, year]);

    const validateCardNumber = (e) => {
        let numberValidation = valid.number(e.target.value);

        if(numberValidation.isValid) {
            setShowDate(true);
            handleChange('card_number', e.target.value);
        } else {
            setShowDate(false);
        }
    }

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
        handleChange('month', e.target.value);
    }

    const handleYearChange = (e) => {
        setYear(e.target.value);
        handleChange('year', e.target.value);
    }

    const validateExpiryDate = (e) => {
        //if(month && year) {
            let dateValid = valid.expirationDate(`${month}/${year}`);
            
            if(dateValid.isValid) {
                setshowSecurityCode(true);
            } else {
                setshowSecurityCode(false);
            }
        //}
    }

    const validateSecurityCode = (e) => {
        let cvv = e.target.value;
        let cvvValid = valid.cvv(cvv);

        if(cvvValid.isValid) {
            setShowNextButton(true);
        } else {
            setShowNextButton(false);
        }

        handleChange('cvv', e.target.value);
    }

    return (
        <div>
            <p>Payment Information</p>
            <input 
                type="text" 
                name="card_number" 
                onChange={validateCardNumber} 
                placeholder="Enter Card Number" 
                value={values.card_number} />  

                <div className="expiration-date">
                    <input 
                        type="text" 
                        name="month" 
                        onChange={handleMonthChange} 
                        placeholder="Month" 
                        value={values.month} 
                        disabled={!showDate}/>    
                    <input 
                        type="text" 
                        name="year" 
                        onChange={handleYearChange} 
                        placeholder="Year" 
                        value={values.year} 
                        disabled={!showDate}/>        
                </div>

                <input 
                        type="text" 
                        name="security_code" 
                        onChange={validateSecurityCode} 
                        placeholder="Enter security code" 
                        value={values.security_code} 
                        disabled={!showSecurityCode}/>

            <div>
                <button onClick={Previous}>Previous Step</button>
                <button onClick={Continue} disabled={!showNextButton}>Continue</button>
            </div>

        </div>
    )
}

export default PaymentInformation;