import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export default class ModalContianer extends Component{
    render(){
        return createPortal(
            this.props.children, 
            document.getElementById("modal-container")
        )
    }
}