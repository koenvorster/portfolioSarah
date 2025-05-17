import React, { useState, useEffect } from "react";

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
                    title: "My internship experience",
                    description: "During my internship, I had the opportunity to work on various projects that challenged me and helped me grow as a developer. I learned about different technologies, collaborated with talented colleagues, and gained valuable insights into the industry. One of the highlights was working on a project that involved building a web application from scratch. It was a great learning experience, and I am grateful for the support and guidance I received throughout my internship." +
                        "\n" + "These experiences not only enhanced my technical skills but also improved my ability to work effectively in a team environment.",
                    image: "/src/assets/img/foto/Project_Beja/sarahMetLaptop.jpg",
                    link: "/blog/Blog_internship",
                },
                {
                    id: 2,
                    title: "Hackathon Tips",
                    description: "How to make the most of your hackathon experience." + "\n" +
                        "Hackathons are intense, fast-paced events where you can learn, create, and collaborate with others. Here are some tips to make the most of your hackathon experience",
                    image: "/src/assets/img/foto/Blog/hackathon.jpg",
                    link: "/blog/Blog_hackathon",
                },
                {
                    id: 3,
                    title: "Robocup Eindhoven",
                    description: "A fantastic experience at RoboCup Eindhoven, exploring robotics and AI." +
                        "\n" + "The event was a showcase of the latest developments in robotics. From robots moving autonomously to advanced systems reacting in real-time to their environment. But what made RoboCup truly unique were the robot soccer matches. Robots competing on the field, each programmed to work as a team and score – it was a fascinating spectacle! The way the robots move tactically and communicate with each other to score a goal really showed me how far technology has come. It was a great mix of sport and technology, giving a new dimension to what is possible with robotics." ,

                    image: "/src/assets/img/foto/Blog/robocup2024.jpg",
                    link: "/blog/Blog_Robocup",
                },
            ];
            setBlogPosts(data);
        };

        fetchData();
    }, []);

    return (
        <section className="sectionContainer6">
            <h1 className="text-3xl font-bold text-center mb-8">My Blog </h1>
            <div className="">
                <img src="/src/assets/img/foto/sarah1.jpg" alt="Background" className="img_me"/>
            <p className="cardintroblog text-left text-gray-600 mb-6">
                Welcome to my blog! Here, I share my experiences, insights, and tips on various topics.
                Whether you're interested in my internship experiences, hackathon tips, or robotics adventures,
                you'll find something valuable here. Dive in and explore my latest posts!
            </p>

            </div>
            <div className="">
                <div className="sectionContainer4">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="blog-card">
                            <img src={post.image} alt={post.title} className="blog-card-image" />
                            <div className="blog-card-content">
                                <h2 className="blog-card-title">{post.title}</h2>
                                <p className="blog-card-description">{post.description}</p>
                                <a href={post.link} className="card-button">
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogOverview;