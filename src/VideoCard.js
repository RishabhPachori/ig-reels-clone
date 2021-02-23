import React, {useRef, useState} from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

function VideoCard ({channel, avatarSrc, song, url, likes, shares}) {
    const [isVideoPlaying, setVideoPlaying] = useState(false)
    const videoRef = useRef(null);
    const onVideoPress = ()=> {
        if (isVideoPlaying) {
            // stop or pause video
            videoRef.current.pause()
            setVideoPlaying(false) 
        }else {
            // play video
            videoRef.current.play()
            setVideoPlaying(true)
        }
    }
    return (
        <div className = 'videoCard'>
            <VideoHeader />
            <video 
            ref = {videoRef}
            onClick = {onVideoPress}
            className = "videoCardPlayer"
            src = {url}
            alt = "Ig reels video"
            loop
            />
            <VideoHeader />
            <VideoFooter 
            channel = {channel}
            avatarSrc = {avatarSrc}
            song = {song}
            likes = {likes}
            shares = {shares} 
            />
        </div>
    )
}

export default VideoCard;