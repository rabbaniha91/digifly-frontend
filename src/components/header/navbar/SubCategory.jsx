import { List, ListItem, ListItemButton, ListItemText, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./desktop/styles.module.css"

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: ["vazir_regular", "sans serif"].join(","),
        fontSize: 13
    },

});

const subCategories = {
    1: ["گیمینگ", "مهندسی", "رندرینگ", "مالتی مدیا"],
    2: ["گیمینگ", "مهندسی"],
    3: ["اپل", "سامسونگ", "شیائومی", "هواوی"],
    4: ["PS5", "XBOX"]
}

const SubCategory = ({ index, to }) => {
    return (
        <ThemeProvider theme={theme}>
            <List component="div" disablePadding>
                <Link to={`product/${to}`} className={`${styles.link} ${styles.hover_item}`}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="مشاهده تمام محصولات این دسته" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                {subCategories[`${index}`].map((item, i) => (
                    <Link key={item} to={`product/${to}/${item}`} className={`${styles.link} ${styles.hover_item}`}>
                        <ListItem key={item} disablePadding={false}>
                            <ListItemButton >
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </ThemeProvider>
    )
}

export default SubCategory