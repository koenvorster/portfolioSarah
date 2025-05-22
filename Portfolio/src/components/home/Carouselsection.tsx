import Slider from "react-slick";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import React from "react";

const slides = [
    <FaReact size={80} color="#61DBFB" />,
    <FaHtml5 size={80} color="#e34c26" />,
    <FaCss3Alt size={80} color="#264de4" />,
    <FaJs size={80} color="#f0db4f" />,
    <FaPython size={80} color="#3776ab" />,
];

const CarouselPortfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings} className={"carousel-portfolio"}>
            <div>
                <h3 className={'carousel-slide'}>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
};

export default CarouselPortfolio;