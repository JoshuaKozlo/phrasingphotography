import React, { Component } from 'react';
import firebase from 'firebase';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import MoreIcon from 'grommet/components/icons/base/More';
import LoginIcon from 'grommet/components/icons/base/Login';

import Logo from './Logo';


class Navigation extends Component {

    renderTitle(path) {
        if (path === '/orders') {
            return <Title>My Orders</Title>
        } else if (path === '/orders/new') {
            return <Title>New Order</Title>
        } else if (path === '/orders/new/checkout') {
            return <Title>Check Out</Title>
        }

        return <Title className="title">Phrasing Photography</Title>
    }

    renderLogo(path) {
        if (path === '/') {
            return <Logo/>
        }
    }

    renderRight() {
        if (this.props.user) {
            return (
                <Menu icon={<MoreIcon/>}
                    dropAlign={{ right: 'right' }}
                >
                    <Anchor onClick={() => this.props.history.push('/orders')}>
                        My Orders
                    </Anchor>
                    <Anchor onClick={() => this.props.history.push('/orders/new')}>
                        New Order
                    </Anchor>
                    <Anchor onClick={() => firebase.auth().signOut()}>
                        Sign Out
                    </Anchor>
                </Menu>
            )
        }
        return (
            <Anchor
                icon={<LoginIcon />}
                primary
                label="Sign In"
                onClick={() => this.props.history.push('/login')}
            />
        );
    }

    render() {
        const path = this.props.location.pathname;

        return (
            <Header fixed={true} float={false}>
                {this.renderLogo(path)}
                {this.renderTitle(path)}
                <Box flex justify='end'direction='row'responsive={false}>
                    {this.renderRight()}
                </Box>
            </Header>
        );
    }
}

export default Navigation;
