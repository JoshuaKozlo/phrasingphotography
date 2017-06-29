import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import MoreIcon from 'grommet/components/icons/base/More';

import firebase from 'firebase';

class Navigation extends Component {

    renderTitle() {
        const path = this.props.location.pathname;

        if (path === '/orders') {
            return 'My Orders'
        } else if (path === '/orders/new') {
            return 'New Order'
        } else if (path === '/orders/new/checkout') {
            return 'Check Out'
        }

        return 'Pie In The Sky'
    }

    renderRight() {
        if (this.props.auth) {
            return (
                <Menu icon={<MoreIcon/>}
                    dropAlign={{ right: 'right' }}
                >
                    <Anchor>
                        My Orders
                    </Anchor>
                    <Anchor>
                        New Order
                    </Anchor>
                    <Anchor>
                        Sign Out
                    </Anchor>
                </Menu>
            )
        }
        return (
            <Anchor
                label="Sign In"
                onClick={() => firebase.auth().signInWithEmailAndPassword('test@test.com', '1qaz1qaz')}
            />
        );
    }

    render() {
        console.log(this.props)
        return (
            <Header fixed={true} float={false}>
                <Title>
                	{this.renderTitle()}
                </Title>
                <Box flex justify='end'direction='row'responsive={false}>
                    {this.renderRight()}
                </Box>
            </Header>
        );
    }
}

export default Navigation;
