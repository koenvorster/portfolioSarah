import { FC } from "react";

const VideoSection: FC = () => {
  return (
      <section className="video-section">
          <div className="VideoTest">
              <video
                  src="/assets/img/CypressTest.mp4"
                  className="internship-video"
                  controls
              />
          </div>
      </section>
  );
};

export default VideoSection;