import React from "react";
import BlogTemplate from "@/pages/BlogTemplate";

const BlogDetailPage: React.FC = () => {
    return (
        <BlogTemplate
            title="Hack The Future: A Day of Innovation and Teamwork"
            image="/assets/img/foto/Blog/hackathon.jpg"
            content="Taking part in Hack The Future was an unforgettable experience that pushed my boundaries as a junior developer and energized my passion for technology. The event was packed with talented individuals, ambitious challenges, and a contagious spirit of collaboration. From the moment we were briefed on our challenge—designing a solution to promote sustainable space tourism—it was all hands on deck. My teammate and I combined our skills in web technologies and creative thinking to come up with an interactive platform that visualized potential travel packages and environmental impact. We brainstormed, prototyped, coded, and refined—fuelled by caffeine and excitement.

What truly stood out to me was the mentorship and support available during the hackathon. Industry professionals dropped by to share insights, give feedback, and challenge our ideas. These moments of interaction helped sharpen our focus and brought fresh perspective to our project. We didn’t just write code—we learned how to pitch, prioritize, and pivot when things didn’t go as expected.

One of the biggest highlights? Winning 4th place! It was a proud moment to see our idea recognized among so many creative and technically impressive projects. For me, the prize wasn’t just the recognition—it was the entire learning experience. I gained confidence, met inspiring people, and discovered how much can be accomplished in just one day with the right mindset and teamwork.

All in all, Hack The Future was not just a competition, but a celebration of innovation. I left with new skills, a stronger belief in my abilities, and a deeper motivation to grow as a developer. I’m incredibly grateful to have been part of it, and I can’t wait to join again next year!"
            author="Sarah Janssen"
            date="June 10, 2024"
        />
    );
};

export default BlogDetailPage;
