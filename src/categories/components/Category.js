import React from 'react';
import Playlist from '../../playlist/components/Playlist';
import './category.css';

export default function(props){
    return(
        <div className="Category">
            <p className="Category-description">{props.description}</p>
            <h1 className="Category-title">{props.title}</h1>
            <Playlist 
                handleClick = {props.handleClick}
                playlist={props.playlist}
            />
        </div>
    );
}