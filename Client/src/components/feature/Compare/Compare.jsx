import React from 'react';
import './_Compare.scss';

class Compare extends React.Component {
    render () {
        return (
        <>
            <section className="compare">
                <div className="one">
                    <h1>HEALTHY NATURAL SOAP INGREDIENTS</h1>
                    <br></br>
                    <p>
                    <h3>Healthy Oils:</h3> despite common belief – oil is actually an important ingredient in soap, especially if you have oily or acne prone skin. Added oils like coconut oil, grapeseed oil or olive oil help to nourish and moisturize skin and bring it back to its natural PH levels.
                        <br></br>
                        <h3>Essential Oils:</h3>scented natural soaps are usually created with an essential oil to produce a natural, harm-free odor.
                        <br></br>
                         <h3>Honey, Aloe, Oatmeal etc.:</h3>natural soaps are made with organic, biodegradable ingredients that are harvested, produced, or sourced in a safe and conscious way. Unlike chemical ingredients, a consumer can easily understand what these ingredients are and how their body will react to them.
                        <br></br>
                         
                   
                    </p>
                </div>

                <div className="two">
                    <h1>HARMFUL COMMERCIAL SOAP INGREDIENTS</h1> 
                    <br></br>
                    <p>
                    <h3>Parabens:</h3>otherwise known as chemical preservatives, these harmful ingredients are found in majority of commercial soap and beauty products.
                    <br></br>
                     <h3>Phthalates:</h3>known to cause cancer, this additive is often used as a ‘plasticizer’- a fancy word for an ingredient used to produce plastic.
                        <br></br>
                    <h3>Artificial Colouring:</h3>commercial soaps are packed with artificial dyes that have been known to cause health problems and illnesses in humans.
                        <br></br>
                       <h3>Synthetic Perfume:</h3>artificial perfume scents, although they smell nice, are linked to allergies and hormonal issues. As well, synthetic ingredients such as perfume are likely to cause skin conditions and to aggravate existing issues such as acne.
                        <br></br>
                        Commercial soap manufacturers use a process called “getting” to remove the glycerin from the action of the soap.  

                    </p>
                </div>
            </section>
        </>
    )
    }
}
export default Compare;