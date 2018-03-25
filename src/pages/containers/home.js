import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/Categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-player';

export default class Home extends Component {

    state={
        modalVisible:false,
    }
    
    render(){
        return( 
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <Categories 
                        categories={this.props.data.categories}
                        handleClick={()=> this.setState({modalVisible:true})}/>

                    {this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={()=>this.setState({modalVisible:false})}
                            >
                                <VideoPlayer/>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}