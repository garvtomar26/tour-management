import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherlmg from '../assets/images/weather.png';
import guidelmg from '../assets/images/guide.png';
import customizationlmg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherlmg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    },
    {
        imgUrl: guidelmg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    },
    {
        imgUrl: customizationlmg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    },
]

const ServiceList = () => {
  return (
    <>
        {servicesData.map((item, index) => ( 
            <Col lg='3' key={index}> 
                <ServiceCard item={item} /> 
            </Col>
        ))}
    </>
  );
};



export default ServiceList;