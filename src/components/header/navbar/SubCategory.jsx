import { List, ListItem, ListItemButton, ListItemText, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./desktop/styles.module.css"

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: ["shabnam", "sans serif"].join(","),
        fontSize: 13
    },

});

const subCategories = {
    1: ["ایسوس", "لنوو", "ایسر", "اپل", "سامسونگ", "توشیبا", "ام اس آی"],
    2: ["گیمینگ", "مهندسی", "کیس اسمبل شده", "کیبورد", "موس", "مانیتور"],
    3: ["اپل", "سامسونگ", "شیائومی", "هواوی", "ال جی", "نوکیا", "موتورولا", "ورتو", "هدفون", "شارژر", "کاور"],
    4: ["PS5", "XBOX", "PS4"]
}

const SubCategory = ({ index, to }) => {
    return (
        <ThemeProvider theme={theme}>
            <List component="div" disablePadding>
                <Link to={`products/${to}`} className={`${styles.link} ${styles.hover_item}`}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="مشاهده تمام محصولات این دسته" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                {subCategories[`${index}`].map((item, i) => (
                    <Link key={item} to={`products/${to}/${item}`} className={`${styles.link} ${styles.hover_item}`}>
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