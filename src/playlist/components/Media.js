/**
 * 
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';

//===================================//
import './media.css';

//===================================//

export default class Media extends Component{
    render(){
        const styles = {
            container:{
                fontSize: 14,
                color: '#000',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return(
            <div className="Media"> 
                <div className="Media-cover">
                    <img 
                        src="./images/covers/bitcoin.jpg" 
                        alt=""
                        width={260}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">Hola Juan, estudia!!!</h3>
                    <p className="Media-author">iClown</p>
                </div>
            </div>
        );
    }
}

//===================================//

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
}