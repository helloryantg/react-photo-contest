import React, { Component } from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';
import CreateContestPage from '../CreateContestPage/CreateContestPage';
import Contest from '../../components/Contest/Contest';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'main'
        }
    }

    handleCreateContestClick = (e) => {
        e.preventDefault();
        this.setState({
            page: 'createContest'
        })
    }

    handleMainPageClick = (e) => {
        e.preventDefault();
        this.setState({
            page: 'main'
        })
    }

    render() {
        let page;
        if (this.state.page === 'main') {
            page = <Contest handleCreateContestClick={this.handleCreateContestClick}/>
        } else if (this.state.page === 'createContest') {
            page = 
            <CreateContestPage 
                handleCreateContest={this.props.handleCreateContest} 
                handleMainPageClick={this.handleMainPageClick}
            />
        } else {
            page = null;
        }

        return (
            <div className="MainPage">
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <div>ABOUT THIS APP</div>
                <div>Create a contest between your friends and family and log in to vote for your favorites!</div>

                {page}
            </div>           
        )
    }    
}

export default MainPage;
