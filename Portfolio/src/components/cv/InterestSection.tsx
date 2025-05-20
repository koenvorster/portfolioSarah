import { FC } from "react";
import {
    FaUsers,
    FaDog,
    FaCode,
    FaCoffee,
    FaPlane,
    FaAccessibleIcon,
    FaCar
} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";

const InterestSection: FC = () => {
    return (
        <div className="sectionContainer3">
            <section className="interest-card ">
                <div className="">
                    <h2 className="text-xl font-semibold">Interests</h2>
                </div>
                <ul className="list-none space-y-2">
                    <li className="flex items-center">
                        <FaUsers size={40} className="mr-2 icon"/>
                        My family
                    </li>
                    <li className="flex items-center">
                        <FaDog size={40} className="mr-2 icon"/>
                        Walking with my dog
                    </li>
                    <li className="flex items-center">
                        <FaCode size={40} className="mr-2 icon"/>
                        Coding
                    </li>
                    <li className="flex items-center">
                        <FaPencil size={40} className="mr-2 icon"/>
                        Create & Design
                    </li>
                    <li className="flex items-center">
                        <FaCoffee size={40} className="mr-2 icon"/>
                        Coffee
                    </li>
                    <li className="flex items-center">
                        <FaPlane size={40} className="mr-2 icon"/>
                        Traveling
                    </li>
                </ul>

            </section>
            <section className="interest-card">
                <div className="">
                    <h2 className="text-xl font-semibold">Varia</h2>
                </div>
                <ul className="list-none space-y-2">
                    <li className="flex items-center">
                        <FaCar size={40} className="mr-2 icon"/>
                      Driver licence: B
                    </li>
                    <li className="flex items-center">
                        <FaAccessibleIcon size={40} className="mr-2 icon"/>
                        avaliable for work.
                    </li>
                </ul>
            </section>
            <section className="interest-card">
                <div className="">
                    <h2 className="text-xl font-semibold"></h2>
                </div>
                <ul className="list-none space-y-2">
                    <li className="flex items-center">
                        <FaCar size={40} className="mr-2 icon"/>
                        evening talks (Hack the kempen)
                    </li>
                    <li className="flex items-center">
                        <FaPlane size={40} className="mr-2 icon"/>
                        Hackathon 2025
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default InterestSection;