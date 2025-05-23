import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";



        const slides = [
            {
                title: "Frontend Magic",
                icon: <FaReact size={80} color="#61DBFB" />,
                backgroundImage: "/assets/img/foto/Achtergrond/achtergrondNatuur.jpg",
            },
            {
                title: "Clean Markup",
                icon: <FaHtml5 size={80} color="#e34c26" />,
                backgroundImage: "/assets/img/foto/Achtergrond/achtergrondwolken.jpg",
            },
            {
                title: "Styling Wizardry",
                icon: <FaCss3Alt size={80} color="#264de4" />,
                backgroundImage: "/assets/img/foto/Achtergrond/schilderachtergrond.jpg",
            },
            {
                title: "Code with JavaScript",
                icon: <FaJs size={80} color="#f0db4f" />,
                backgroundImage: "/assets/img/foto/Achtergrond/achtergrondkasteel.jpg",
            },
            {
                title: "Backend with Python",
                icon: <FaPython size={80} color="#3776ab" />,
                backgroundImage: "/assets/img/foto/Achtergrond/schilderachtergrond3.jpg",
            },
        ];

        const CarouselSection = () => {
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                cssEase: "linear",
                pauseOnHover: true,
                fade: true,
            };

            return (
                <div className="cards-container">
                <div className="carousel-container">
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="carousel-slide"
                                style={{
                                    backgroundImage: `url(${slide.backgroundImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",

                                }}
                            >
                                <div className="carousel-overlay">
                                    {slide.icon}
                                    <h2>{slide.title}</h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                </div>
            );
        };

        export default CarouselSection;