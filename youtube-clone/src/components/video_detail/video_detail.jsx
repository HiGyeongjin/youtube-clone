import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = (props) => {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        type="text/html"
        src={`https://www.youtube.com/embed/${props.video.id}`}
        title="youtube video player"
        frameBorder="0"
        allowFullScreen

        //1. `<iframe> 태그`를 이용해서 유튜브 영상을 넣고 props를 사용하여 videoItem에 관한 정보들을 불러옵니다.
        //2. src 주소에 영상 아이디를 가져오세요.
      ></iframe>
      <div className={styles.video_primary_info}>
        <h2 className={styles.videoTitle}>
          {/* //3. video_item.jsx와 마찬가지로 각각의 영상에 해당하는 제목, 채널
          제목, 설명 등을 반환하는 코드를 작성하세요. */}
          {props.video.snippet.title}
        </h2>
      </div>
      <div className={styles.video_secondary_info}>
        <h2 className={styles.channelTitle}>
          {props.video.snippet.channelTitle}
        </h2>
        <pre className={styles.video_description}>
          {props.video.snippet.description}
        </pre>
      </div>
      <div className={styles.comment}>
        <h4>댓글</h4>
      </div>
    </div>
  );
};

export default VideoDetail;
