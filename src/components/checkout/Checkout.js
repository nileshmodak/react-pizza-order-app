import React from 'react';

const Checkout = ({prevStep, values}) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="order-details">
            <div>
                <h3>Address Details</h3>
                <div>Name : {values.name}</div>
                <div>Street Name : {values.street_name}</div>
                <div>House Number : {values.house_number}</div>
                <div>Postal Code : {values.postal_code}</div>
                <div>City : {values.city}</div>
                <div>Phone Number : {values.phone_number}</div>
            </div>
            <div>
                <h3>Pizza details</h3>
                <div>Pizza Size : {values.pizza_size}</div>
                
                <div>Toppings : {(values.olives) ? "olives ," : null}
                    {(values.pepperoni) ? "pepperoni ,": ''}
                    {(values.mushrooms) ? "mushrooms": ''    }
                </div>
            </div>

            <div>
                <h3>Card Information</h3>
                <div>Card Number : {values.card_number}</div>
                <div>Month : {values.month}</div>
                <div>Year : {values.year}</div>
                <div>cvv : {values.cvv}</div>
            </div>
        </div>
    )
}

export default Checkout;