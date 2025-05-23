import React, { useState, useEffect } from "react";

import {Link} from 'react-router-dom'


interface BlogPost {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}
const BlogOverview: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: BlogPost[] = [
                {
                    id: 1,
                    title: "Internship Beja ",
                    description: "During my internship, I had the opportunity to work on a project that challenged me and helped me grow as a developer. I learned about different technologies, collaborated with talented colleagues.  It was a great learning experience, and I am grateful for the support and guidance I received throughout my internship.",
                    image: "/assets/img/foto/Project_Beja/project_internship.jpg",
                    link: "/blog/Blog_internship",
                },
                {
                    id: 2,
                    title: "Hackathon Tips",
                    description: "How to make the most of your hackathon experience." + "\n" +
                        "Hackathons are intense, fast-paced events where you can learn, create, and collaborate with others. Here are some tips to make the most of your hackathon experience",
                    image: "/assets/img/foto/Blog/Talk_AI.jpg",
                    link: "/blog/Blog_hackathon",
                },
                {
                    id: 3,
                    title: "Robocup 2024",
                    description: "A fantastic experience at RoboCup Eindhoven, exploring robotics and AI." +
                        "\n" + "The event was a showcase of the latest developments in robotics. Robots competing on the field, each programmed to work as a team and score – it was a fascinating spectacle!" ,

                    image: "/assets/img/foto/Blog/robocup2024.jpg",
                    link: "/blog/Blog_Robocup",
                },
            ];
            setBlogPosts(data);
        };

        fetchData();
    }, []);

    return (
        <section className="sectionContainer3">
            <h1 className="text-3xl font-bold text-center mb-8">My Blog </h1>
            <div className="">
                <img src="/assets/img/foto/sarah1.jpg" alt="Background" className="img_me"/>
            <p className="cardintroblog text-left text-gray-600 mb-6">
                Welcome to my blog! Here, I share my experiences, insights, and tips on various topics.
                Whether you're interested in my internship experiences, hackathon tips, or robotics adventures,
                you'll find something valuable here. Dive in and explore my latest posts!
            </p>

            </div>
            <div className="cards-container">

                    {blogPosts.map((post) => (
                        <div key={post.id} className="blog-card">
                            <img src={post.image} alt={post.title} className="blog-card-image" />
                            <div className="blog-card-content">
                                <h3 className="blog-card-title">{post.title}</h3>
                                <p className="blog-card-description">{post.description}</p>

                             
                                <div className="button-container">
                                <Link to ={post.link} className="btnblog">
                                    Read More
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

        </section>
    );
};

export default BlogOverview;