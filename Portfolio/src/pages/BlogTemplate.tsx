import React from "react";


interface BlogTemplateProps {
  title: string;
  image: string;
  content: string;
  author: string;
  date: string;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ title, image, content, author, date }) => {
  return (
    <div className="blog-template-container">
        <header className="blog-header">
            <h1 className="blog-title">{title}</h1>
            <div className="blog-divider"></div>

        </header>
        <div className="blog-content">
           < div className="blog-image-container">
        <img src={image} alt={title} className="blog-image"/>
            </div>
            <article className="">
                <p className="text-right">{content}</p>

                <img src="/assets/img/foto/sarah1.jpg" alt="Background" className="img_me"/>
                <p className="blog-meta">

                    By <span className="blog-author">{author}</span> on <span className="blog-date">{date}</span>
                </p>
            </article>
        </div>
    </div>
  );
};

export default BlogTemplate;