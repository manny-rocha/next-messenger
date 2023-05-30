import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <BottomNavigation
            showLabels
        >
            <BottomNavigationAction label="Recents" />
            <BottomNavigationAction label="Favorites" />
            <BottomNavigationAction label="Nearby" />
        </BottomNavigation >
    )
}

export default Navbar