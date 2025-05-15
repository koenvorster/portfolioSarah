import {FC} from 'react'
import {Link} from 'react-router-dom'



const Hero: FC = () => {
  return (
    <div>
      <div className="hero">
        <div className="text">
          <p className="text__short">Passionate about IT</p>
          <h1 className="text__title">Sarah Janssen</h1>
          <p className="text__description action-text">Take some time to view my work</p>
          <Link to={'Projects'} className="text__button">Projects</Link>
        </div>

        <div className="grid__container">
          <div className="grid__item one"></div>
          <div className="grid__item two"></div>
          <div className="grid__item three"></div>
          <div className="grid__item four"></div>
          <div className="grid__item five"></div>
          <div className="grid__item six"></div>
          <div className="grid__item seven"></div>
          <div className="grid__item eight"></div>
          <div className="grid__item nine"></div>
          <div className="grid__item ten"></div>
          <div className="grid__item eleven"></div>
          <div className="grid__item twelve"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
