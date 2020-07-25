import React, {Component} from 'react';
import { Responsive, Menu, Dropdown } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class Navigate extends Component {

    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state
        return (
            <div style={{zIndex: "100", position: "fixed", width: "100%"}}>
            <Responsive  maxWidth={799} >
                <Menu vertical style={{borderBottom: '1px solid white', width: "100%"}}>
                    <Dropdown  icon="bars" style={{padding: ".5em 0 0 1em", fontSize: "1.5em" }}>
                    <Dropdown.Menu style={{borderTop: '1px solid white', 
                            borderRight: '1px solid white',
                            paddingTop: '7px'}}>
                    <Dropdown.Item style={{fontSize: "12px"}} as={Link} to="/">Home</Dropdown.Item>
                    <Dropdown.Item style={{fontSize: "12px"}} as={Link} to="/about">About Us</Dropdown.Item>
                    <Dropdown.Item style={{fontSize: "12px"}} as={Link} to="/services">Services</Dropdown.Item>
                    <Dropdown.Item style={{fontSize: "12px"}} as={Link} to="/contact">Contact</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Menu>
            </Responsive>
            <Responsive  minWidth={800}>
                <Menu>
                <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link} to="/"
                        >
                        Home
                    </Menu.Item>
                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                        as={Link} to="/about"
                        >
                        About Us
                    </Menu.Item>

                    <Menu.Item
                        name='services'
                        active={activeItem === 'services'}
                        onClick={this.handleItemClick}
                        as={Link} to="/services"
                    >
                    Services
                    </Menu.Item>

                    <Menu.Item
                        name='contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                        as={Link} to="/contact"
                    >
                    Contact
                </Menu.Item>
                </Menu>
            </Responsive>
            </div>
        )
    }
}
export default Navigate

/*
    AppBar is like the container. It's basically just a rectangle.
    ToolBar lets you put in text, links, etc
    Typography is just the text inside the toolbar

*/