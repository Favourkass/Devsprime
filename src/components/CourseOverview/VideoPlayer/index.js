import React, { useEffect, useState } from "react";
import { VideoPlayerWrapper } from "./style";
import ReactPlayer from "react-player";
import CourseDropDown from "../CourseOverviewNav/dropdown";
import DropdownWithoutLink from "../CourseOverviewNav/dropdownWithoutLink";

const VideoPlayer = ({ url, title, hasAccess, courseVideos, type }) => {
  const [lesson, setLesson] = useState(url);
  const playLesson = (url) => {
    setLesson(url);
  };
  useEffect(() => setLesson(url), [url]);
  return (
    <VideoPlayerWrapper>
      <ReactPlayer width="100vw" height="95vh" controls url={lesson} />
      {hasAccess ? (
        <CourseDropDown
          type={type}
          title={title}
          courseVideos={courseVideos}
          playLesson={playLesson}
        />
      ) : (
        <DropdownWithoutLink
          type={type}
          title={title}
          courseVideos={courseVideos}
        />
      )}
    </VideoPlayerWrapper>
  );
};

export default VideoPlayer;
