import { FC } from "react";

const VideoSection: FC = () => {
  return (
      <section className="video-section">
          <h2 className={"sub-title"}>System Demo</h2>
          <div className="VideoInternschipDemo">

              <video
                  src="/assets/img/CypressTest.mp4"
                  className="internship-video"
                  controls
                    autoPlay
                    loop
                    muted

              />
          </div>
      </section>
  );
};

export default VideoSection;