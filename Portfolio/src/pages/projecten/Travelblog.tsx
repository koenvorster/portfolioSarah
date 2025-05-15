import { FC } from "react";

const Travelblog: FC = () => {
    return (
        <div className="travelblog-container">
            <h1 className="travelblog-title">Travelblog</h1>
            <section className="features-section">
                <h2 className="features-title">Key Features</h2>
<img src="/src/assets/img/foto/Travelapp/travel_App.jpg" alt="Travelblog" className="travelblog-image" />
                <p className="card2 ">
                    The Travelblog application is a schooll project developed during my 2de year at
                    Thomas More. It was created to enhance my skills in web and mobile development, focusing on
                    creating a platform for users to share their travel experiences and insights.
                </p>
                <p className=" text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    The Travelblog application is designed to provide users with a seamless experience in
                    sharing and discovering travel-related content. The key features include:
                </p>
                <ul className="features-list">
                    <li>User Registration and Authentication</li>
                    <li>Blog Management</li>
                    <li>Commenting System with Comments</li>
                    <li>Mark Favorites</li>
                </ul>
            </section>
            <img src="/src/assets/img/foto/Travelapp/travelappsmartphone.png" alt="Travelblog" className="travelblog-image" />
            <section className="technologies-section">
                <h2 className="technologies-title">Technologies</h2>
                <ul className="technologies-list">
                    <li>Web Application: Next.js</li>
                    <li>Mobile Application: React Native</li>
                    <li>Data Service: Supabase</li>
                </ul>
            </section>
        </div>
    );
};

export default Travelblog;