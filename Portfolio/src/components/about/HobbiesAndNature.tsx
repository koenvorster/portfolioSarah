import { FC } from "react";

const HobbiesAndNature: FC = () => {
  return (
      <div className="sectionContainer7">
          <div>

          </div>
          <div className={"container mx-auto px-4 py-5 my-5 text-center"}>
              <h2 className="skills-h1 ">Hobbies & Nature</h2>

              <div className=" cardnature px-4 py-5 my-5 text-center">
                  <h3 className=" ">Hobbies & Nature</h3>
                  <div className="containerfoto">
                      <img
                          src="./src/assets/img/foto/planten.png"
                          alt="Houseplants or hobby"
                          className=" foto_planten "
                      />
                  </div>
                  <div className="text-card">
                  <p className="">
                      Besides spending time behind my laptop, I also enjoy other hobbies. I love spending time with my
                      dog
                      and
                      used to be an avid collector and caretaker of houseplants. I once had a large collection, but with
                      new
                      challenges in my life, I’ve scaled it back a bit.
                  </p>
                  <p className="">
                      As a nature lover, I find joy in being outdoors. I often go on long walks with my dog—usually big
                      hikes
                      every week. It’s the perfect way for me to disconnect from daily stress and find peace.
                  </p>
              </div>
              </div>

          </div>
      </div>
  );
};

export default HobbiesAndNature;