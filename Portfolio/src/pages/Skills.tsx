import {FC} from 'react'




const Skills: FC = () => {
  return (
    <>


        <section className="skills">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="sectionContainer1">
            <div className="card bg-white shadow-md rounded-lg p-4">

                <div className="p-4">
                <h2 className="text-xl font-semibold">Hard Skills</h2>
                <p className="text-gray-600">Skills</p>
                </div>
            </div>
            </div>
        </section>
        <div className="sectionContainer1">
            <div className="card bg-white shadow-md rounded-lg p-4">

                <div className="p-4">
                <h2 className="text-xl font-semibold">Soft skills</h2>
                <p className="text-gray-600">Skills</p>
                </div>
            </div>
            </div>
    </>
  )
}

export default Skills
