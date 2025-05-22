import {FC} from 'react'
import {Link} from 'react-router-dom'


const AboutSection: FC = () => {
  return (
    <div className="sectionContainer2 ">

        <h1 className="about-me-title flex-items">
          <span className="about">About </span><br/> <span className="me">me</span>
        </h1>
        <img src="/assets/img/foto/achtergrond4sarah.jpg" alt="Contact"
             className="aboutImage2"/>
        <div className=" card_about">
            <p className="lead mb-4">Wondering why I went back to college? Or rather curious about the person behind
                this
                website? On this page you will find some more info about who I am and what I do in my spare time.</p>

        </div>
<div className="card5">
  <Link to={'/About'} className="card-button">Read more</Link>

</div>





    </div>
  )
}

export default AboutSection
