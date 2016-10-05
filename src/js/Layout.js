import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component{

    render(){
        return (
            <div>
                <Link to='/' onlyActiveOnIndex={true}>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>

                {this.props.children}
            </div>
        );
    }

}
