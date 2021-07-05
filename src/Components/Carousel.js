import React from 'react';
import {MDBCarousel , MDBCarouselCaption , MDBCarouselInner,
MDBCarouselItem,MDBView,MDBContainer, MDBBtn} from 'mdbreact';
import Slide1 from '../assets/slide4.jpg'
import Slide2 from '../assets/slide5.jpg'
import Slide3 from '../assets/slide3.jpg'
import './style.css'
const Carousel = () => {
    return (
        <MDBContainer>
            <MDBCarousel activeItem={1}
                         length={3}
                         showControls={true}
                         showIndicators={true}
                         className="z-depth-1"
                         slide
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img  className="d-block w-100" src={Slide1} alt="First Slide" />
                        </MDBView>
                        <MDBCarouselCaption>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img className="d-block w-100" src={Slide2} alt="First Slide" />
                        </MDBView>
                        <MDBCarouselCaption>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img className="d-block w-100" src={Slide3} alt="First Slide" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <div className="container-text">
                                <h3 className="h3-responsive mediumtext">DECOUVREZ LES</h3>
                                <h3 className="h3-responsive bigtext">PC DE TECHNOW</h3>
                                <h3 className="h3-responsive mediumtext2">AVEC PROCESSEURS</h3>
                                <p className="smalltext">INTEL CORE 10ème GENERATION</p>
                                    <MDBBtn color="primary" className="btn01"  >VOIR LES PC</MDBBtn>                                    
                            </div>
                          
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
};

export default Carousel;