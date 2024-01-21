import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Collapse, ListItemIcon } from '@mui/material';
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import SubCategory from './SubCategory';


const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: ["vazir_regular", "sans serif"].join(","),
    fontSize: 17
  },



});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


const TemporaryDrawer = React.memo(({ open }) => {
  const [openSub, setOpenSub] = React.useState([false, false, false, false])
  const [i, setI] = React.useState("")



  const openSubCategoty = (index) => {
    setOpenSub((prev) => {
      const newOpen = [...prev]
      for (let i = 0; i < newOpen.length; i++) {
        if (i !== index) {
          newOpen[i] = false
        } else {
          newOpen[i] = !newOpen[i]
        }
      }
      return newOpen
    })

    setI(index)
  }

  const list = () => (

    <Box
      sx={{ width: 350, bgcolor: 'var(--title-color)', height: "140vh" }}
      role="presentation"


    >
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <List sx={{ marginTop: "2rem", paddingBottom: "5rem" }}>
            <ListItem disablePadding={true} onClick={() => { openSubCategoty(0) }}>
              <ListItemButton sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: `${openSub[0] ? "var(--btn-hover)" : "#000"}` }}>

                <ListItemText primary={"لپ تاپ"} />
                <ListItemIcon >
                  {openSub[0] ? (<IoIosArrowBack size={24} color='var(--btn-hover)' />) : (<IoIosArrowDown size={24} color='#000' />)}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Collapse in={openSub[0]} timeout="auto" unmountOnExit>
              <SubCategory index={i + 1} to={"laptop"} />
            </Collapse>
            <ListItem disablePadding={true} onClick={() => { openSubCategoty(1) }}>
              <ListItemButton sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: `${openSub[1] ? "var(--btn-hover)" : "#000"}` }}>

                <ListItemText primary={"کامپیوتر"} />
                <ListItemIcon >
                  {openSub[1] ? (<IoIosArrowBack size={24} color='var(--btn-hover)' />) : (<IoIosArrowDown size={24} color='#000' />)}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Collapse in={openSub[1]} timeout="auto" unmountOnExit>
              <SubCategory index={i + 1} to={"pc"} />
            </Collapse>
            <ListItem disablePadding={true} onClick={() => { openSubCategoty(2) }}>
              <ListItemButton sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: `${openSub[2] ? "var(--btn-hover)" : "#000"}` }}>

                <ListItemText primary={"موبایل"} />
                <ListItemIcon >
                  {openSub[2] ? (<IoIosArrowBack size={24} color='var(--btn-hover)' />) : (<IoIosArrowDown size={24} color='#000' />)}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Collapse in={openSub[2]} timeout="auto" unmountOnExit>
              <SubCategory index={i + 1} to={"mobile"} />
            </Collapse>
            <ListItem disablePadding={true} onClick={() => { openSubCategoty(3) }}>
              <ListItemButton sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: `${openSub[3] ? "var(--btn-hover)" : "#000"}` }}>

                <ListItemText primary={"کنسول بازی"} />
                <ListItemIcon >
                  {openSub[3] ? (<IoIosArrowBack size={24} color='var(--btn-hover)' />) : (<IoIosArrowDown size={24} color='#000' />)}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Collapse in={openSub[3]} timeout="auto" unmountOnExit>
              <SubCategory index={i + 1} to={"gaming"} />
            </Collapse>
          </List>
        </ThemeProvider>
      </CacheProvider>
    </Box>


  );

  return (
    <div >
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={open}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>

  );
})

export default TemporaryDrawer