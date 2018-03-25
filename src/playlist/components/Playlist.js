import React from 'react';
import Media from './Media';
import './playlist.css';


export default function Playlist(props){
    return(
        <div className="Playlist">
        {
          props.playlist.map((item) => {
            return (
              <Media 
                {...item} key={item.id} 
                handleClick={props.handleClick}
              />
            )
          })
        }
      </div>
    );   
}