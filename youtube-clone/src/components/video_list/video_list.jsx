import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  return (
    <ul>
      {props.videos &&
        props.videos.map((video) => {
          //props(videos) 배열을 돌면서 video 에 있는 items(배열 원소)를 VideoItem컴포넌트로 만들어줌.
          return (
            <VideoItem
              key={video.id}
              video={video}
              onVideoClick={props.onVideoClick}
              display={props.display}
            />
          );
        })}
    </ul>
  );
};

export default VideoList;
