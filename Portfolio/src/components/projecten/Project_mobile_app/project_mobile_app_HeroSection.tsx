import {FC} from 'react'
import {Link} from 'react-router-dom'



const Project_mobile_app_HeroSection: FC = () => {
    return (
        <div className="sectionContainer2 ">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Project Mobile Travel app</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Create a mobile app for a Travel agency.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to={'Project_mobile_app'} className="btn btn-lg px-4 gap-3">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project_mobile_app_HeroSection