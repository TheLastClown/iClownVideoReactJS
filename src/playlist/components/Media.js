/**
 * 
 */
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

//===================================//
import './media.css';

//===================================//

export default class Media extends PureComponent{


    handleClick = (event) => {
        console.log(event);
    }

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
            <div className="Media" onClick={this.props.handleClick}> 
                <div className="Media-cover">
                    <img 
                        src={this.props.cover} 
                        alt=""
                        width={260}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        );
    }
}

//===================================//

Media.propTypes = {
    cover: propTypes.string,
    title: propTypes.string,
    author: propTypes.string,
}