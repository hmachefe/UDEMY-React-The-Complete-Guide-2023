import { Fragment, useState, useEffect, Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    
    constructor() {
        super();
        this.state = { filteredUsers: [], searchTerm: '' };
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({ filteredUsers: DUMMY_USERS });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate  prevState == this.state', prevState, '==', this.state);
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({ filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) });
        }
    }

    searchChangeHandler = (event) => {
        console.log('searchChangeHandler' + event.target.value);
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary> 
                    <Users users={this.state.filteredUsers} />  
                </ErrorBoundary>                
            </Fragment>
        );
    }
}




export default UserFinder;