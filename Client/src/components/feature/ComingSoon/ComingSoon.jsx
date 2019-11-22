import React from 'react';
import './_ComingSoon.scss';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


class ComingSoon extends React.Component {
    render () {
        return (
        <>
            <section className="NextCollection">
                <div className="ComingSoon">
                    <p>Coming Soon:
                    <Carousel className="Carousel">
                        <div>
                            <img src="/image/comingSoonImg/img1.jpeg" id="lastClone" alt="" />
                           
                        </div>
                        
                        <div>
                            <img src="/image/comingSoonImg/img2.jpeg" alt="" />
                        
                        </div>
                        
                        <div>
                            <img src="/image/comingSoonImg/img3.jpeg" alt="" />
                            
                        </div>
                        
                        <div>
                            <img src="/image/comingSoonImg/img4.jpeg" id="lastClone" alt="" />
                            
                        </div>
                        
                        <div>
                            <img src="/image/comingSoonImg/img5.jpeg" alt="" />
                            
                        </div>
                        
                       
                        
                </Carousel>


                    </p>
                    
                </div>
</section>
</>
    )
    }
}
/////// The command to pull all of the products that hav the Id that is set to b on sale 


export default ComingSoon;