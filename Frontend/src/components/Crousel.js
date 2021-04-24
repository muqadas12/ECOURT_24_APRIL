// src/components/bootstrap-carousel.component.js
import React from "react";
import c4 from "../assets/Images/c4.jpg"
import c2 from "../assets/Images/c2.jpg"
import c3 from "../assets/Images/c3.jpg"


import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-15">
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={c4}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Welcome to Distric Court</h3>
                                        
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={c2}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Welcome To Distric Court</h3>
                                       
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={c3}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Welcome To Distric Court</h3>
                                        
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;