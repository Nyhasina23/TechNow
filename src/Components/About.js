import React, { Component } from 'react'
import NavLinks from './NavLinks'
import './SmallStyle.css'

export default class About extends Component {
    render() {
        return (
            <div className="flexBox">
                <NavLinks />
              Je suis dans About
            </div>
        )
    }
}
