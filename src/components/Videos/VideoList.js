import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  return (
    <div className="video-list">
      {props.videos.map((video) => {
        return <VideoItem title={video.video} />;
      })}
    </div>
  );
};

export default VideoList;