import React from "react";
import BlogTemplate from "@/pages/BlogTemplate";

const BlogDetailPage: React.FC = () => {
  return (
    <BlogTemplate
      title="Mijn Erasmus Stage in Beja, Portugal"
      image="/src/assets/img/foto/Blog/IPBejaStage.jpg"
      content="Last months, I had the privilege of doing my Erasmus internship in Beja, Portugal.
       It was an adventure I won't soon forget, both professionally and personally.
       When I arrived as a stranger, I had no idea that I would leave feeling like Beja had become my second home.
The start of my adventure
I arrived in Beja on a sunny day in March. The city welcomed me with open arms and I immediately felt at home. The warm weather, the friendly locals, and the beautiful surroundings made my arrival a pleasant experience. I was excited to start my internship at IPBeja, a university known for its innovative projects and research.
I was assigned to a project focused on water measurement and data analysis. My goal was to develop a web application that would help manage and visualize water measurement data. I was eager to get started and learn as much as possible during my time there.

Discovering a new culture

During my time in Portugal, I had the chance to discover a new culture, learn about local products and further improve my language skills. I met amazing people, both personally and professionally. My colleagues in Beja were incredibly welcoming and helpful, which made my experience there even more special. Moreover, I learned a lot about the Portuguese way of working, which broadened my perspective on the world.

My project: water measurement and data analysis

My internship revolved around developing a web application for managing water measurement data. The app collects and stores data in a structured PostgreSQL database and visualises this data on interactive dashboards.
I worked closely with my supervisor, who guided me through the development process and provided valuable feedback. The project was challenging but also very rewarding. I learned a lot about data management, web development, and how to work effectively in a team.

The technologies I used

For this project, I used a range of technologies, including Python and Django for back-end logic, PostgreSQL for data storage, and Grafana for data visualisation. I also used Docker to ensure that the application works consistently across different environments. It was a great experience to use these tools in practice and deepen my knowledge of software development.
Besides developing the application, I was also responsible for automating testing for the user interface. I did this with Cypress, which ensures that the user interface responds correctly to user actions. It was great to see how quickly I got feedback on how the application worked and it gave me the chance to further develop my skills in test automation.
I also had the opportunity to work with Git for version control, which helped me keep track of changes and collaborate effectively with my colleagues. This was a valuable experience that I will take with me in my future career.
The importance of teamwork
One of the most important lessons I learned during my internship was the importance of teamwork. Working with colleagues from different backgrounds and cultures taught me how to communicate effectively and work together towards a common goal. I learned to appreciate different perspectives and approaches, which ultimately led to better results.
I also learned how to give and receive feedback, which is essential for personal and professional growth. My colleagues were always willing to help and share their knowledge, which made the work environment very pleasant.
I am grateful for the support I received from my colleagues and the opportunity to learn from them. Their guidance and encouragement helped me grow as a developer and as a person."
      author="Sarah Jansen"
      date="Mei 18, 2025"
    />
  );
};

export default BlogDetailPage;