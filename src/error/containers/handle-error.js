import React, { Component } from 'react';
import Error from '../components/Error';

export default class HandleError extends Component {

    state={
        handleError: false,
        error: '',
        info: ''
    }

    componentDidCatch(error, info){
        this.setState({
            handleError: true,
            error: error,
            info: info
        });
    }

    render(){
        if ( this.state.handleError ){
            return(
                <Error
                    error={this.state.error}
                    info={this.state.info}
                />
            );
        } else {
            return this.props.children
        }
    }
}