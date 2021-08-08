import React from 'react';

const UserDetails = ({nextStep, handleChange, values }) => {

    const NextStep = e => {
        e.preventDefault();
        nextStep();
    }

    return(
        <div className="form-group">
            <p>Enter name and address details</p>
            <input 
                type="text" 
                name="name" 
                onChange={handleChange('name')} 
                placeholder="Name" 
                value={values.name}/>

            <br/>

            <input 
                type="text" 
                name="street_name" 
                onChange={handleChange('street_name')} 
                placeholder="Street Name" 
                value={values.street_name}/>

            <br/>

            <input 
                type="text" 
                name="house_number" 
                onChange={handleChange('house_number')} 
                placeholder="House Number" 
                value={values.house_number}/> 

            <br/>

            <input 
                type="text" 
                name="postal_code" 
                onChange={handleChange('postal_code')} 
                placeholder="Postal Code" 
                value={values.postal_code}/>

            <br/>

            <input 
                type="text" 
                name="city" 
                onChange={handleChange('city')} 
                placeholder="City" 
                value={values.city}/>

            <br/>

            <input 
                type="text" 
                name="phone_number" 
                onChange={handleChange('phone_number')} 
                placeholder="Phone Number" 
                value={values.phone_number}/>

            <br/>

            <button onClick={NextStep}>Continue</button>
    </div>
    )
}

export default UserDetails;