import { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';
import Users from './Users';
import classes from './UserFinder.module.css';


class UserFinder extends Component {

    static contextType = UsersContext;
    
    constructor() {
        super();
        this.state = { filteredUsers: [], searchTerm: '' };
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate  prevState == this.state', prevState, '==', this.state);
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({ filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) });
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
            <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
}




export default UserFinder;