import React from 'react'
// import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,toggleShow,isTaskBarShowed}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={isTaskBarShowed ? "steelblue" : "purple"} text={isTaskBarShowed ? "Hide Create a Task Bar " : "Show create a task button"}
            toggleShow={toggleShow}
            />
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
