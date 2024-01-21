import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'

const MainCategory = ({handler, text, active, index}) => {
    return (
        <ListItem disablePadding={true} onClick={() => { handler(index) }}>
            <ListItemButton sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: `${active[index] ? "var(--btn-hover)" : "#000"}` }}>

                <ListItemText primary={text} />
                <ListItemIcon >
                    {active[index] ? (<IoIosArrowBack size={24} color='var(--btn-hover)' />) : (<IoIosArrowDown size={24} color='#000' />)}
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
}

export default MainCategory