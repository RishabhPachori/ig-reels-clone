import React from 'react';
import './VideoFooter.css';
import { Button, Avatar } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
import FavouriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function VideoFooter({channel, avatarSrc, song, likes, shares}) {
    return (
        <div className = 'videoFooter'>
            <div className = 'videoFooterText'>
            <Avatar src = {avatarSrc} />
            <h3>
                {channel} . <Button>Follow</Button>
                </h3>
            </div>
            <div className = 'videoFooterTicker'>
                <MusicNoteIcon 
                className = 'videoFooterIcon'/>
                <Ticker mode = "smooth">
                    {({index})=> (
                    <>
                    <h1>{song}</h1>
                    </>)}
                    </Ticker>
            </div>
            <div className="videoFooterActions">
            <div className="videoFooterActionsLeft">
                <FavouriteIcon fontsize="large"/>
                <ModeCommentIcon fontsize="large"/>
                <SendIcon fontsize="large"/>
                <MoreHorizIcon fontsize="large"/> 
            </div>
            <div className="videoFooterActionsRight">
                <div className="videoFooterStat">
                    <FavouriteIcon/>
                    <p>{likes}</p>
                </div>
                <div className="videoFooterStat">
                    <ModeCommentIcon/>
                    <p>{shares}</p>   
                </div>
            </div>
        </div>
        </div>
    )
}

export default VideoFooter;