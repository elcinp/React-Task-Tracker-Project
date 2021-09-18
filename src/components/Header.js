import React from 'react'
// import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="purple" text="Show create a task button"/>
        </header>
    )
}
// Header.defaultProps = {
//     title:'Task Tracker as default'
// }


// Header.PropTypes = {
//     title: PropTypes.string.isRequired
// }



export default Header;
