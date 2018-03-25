import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/Categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/ModalContainer';

export default class Home extends Component {
    render(){
        return(
            <HomeLayout>
                <Related/>
                <Categories categories={this.props.data.categories}/>
                <ModalContainer>
                    <h1>Hola Portal</h1>
                </ModalContainer>
            </HomeLayout>
        );
    }
}