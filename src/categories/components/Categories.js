import React from 'react';
import Category from './Category';
import './categories.css';
import SearchContainer from '../../widgets/containers/SearchContainer';

export default function Categories(props){
    return(
        <div className="Categories">
            <SearchContainer/>
            {props.categories.map((item) => {
                return (
                    <Category 
                        key={item.id} {...item}
                        handleClick = {props.handleClick}
                    />
                )
            })} 
        </div>
    );
}