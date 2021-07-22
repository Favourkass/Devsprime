import React, { useEffect, useState } from 'react';
import {VideoPlayerWrapper} from './style';
import ReactPlayer from 'react-player';
import CourseDropDown from '../CourseOverviewNav/dropdown'

const VideoPlayer = ({url, title, courseVideos,type}) => {
    const [lesson, setLesson]= useState(url)
    const playLesson=(url)=>{
        setLesson(url)
    }
    useEffect(()=>setLesson(url),[url])
    return(
        <VideoPlayerWrapper>
            <ReactPlayer width='100vw' height='95vh' controls url={lesson}/>
            <CourseDropDown 
            type={type}
            title={title} 
            courseVideos={courseVideos} 
            playLesson={playLesson}
            />
        </VideoPlayerWrapper>
    )
};

export default VideoPlayer;