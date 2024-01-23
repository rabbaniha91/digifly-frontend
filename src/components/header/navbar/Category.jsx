import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Collapse, Divider } from '@mui/material';
import SubCategory from './SubCategory';
import MainCategory from './mobile/MainCategory';


const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: ["shabnam", "sans serif"].join(","),
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
      sx={{ width: 350, bgcolor: 'var(--title-color)', height: "200vh" }}
      role="presentation"


    >
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <List sx={{ marginTop: "1rem", paddingBottom: "5rem" }}>
            <MainCategory handler={openSubCategoty} text={"لپ تاپ"} active={openSub} index={0} />
            <Collapse in={openSub[0]} timeout="auto" unmountOnExit>
              <SubCategory index={i + 1} to={"lapstop"} />
            </Collapse>
            <Divider />
            <MainCategory handler={openSubCategoty} text={"کامپیوتر"} active={openSub} index={1} />

            <Collapse in={openSub[1]} timeout="auto" unmountOnExit>
              <SubCategory index={i + 1} to={"pc"} />
            </Collapse>
            <Divider />
            <MainCategory handler={openSubCategoty} text={"موبایل"} active={openSub} index={2} />

            <Collapse in={openSub[2]} timeout="auto" unmountOnExit>
              <SubCategory index={i + 1} to={"mobile"} />
            </Collapse>
            <Divider />
            <MainCategory handler={openSubCategoty} text={"کنسول بازی"} active={openSub} index={3} />

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
          <div
            style={{
              width: "100%", height: "7rem",
              background: "var(--tertiary-btn)",
              display: "flex", alignItems: "center",
              justifyContent: "center"
            }}>دسته بندی کالاهای فروشگاه</div>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>

  );
})

export default TemporaryDrawer