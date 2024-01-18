import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = createTheme({
    direction: 'rtl',

});

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function TextInput({ label, helperText, error, onChange, onBlur, name, fullWidth, dir, type }) {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <div dir={dir}>
                    <TextField
                        type={!type ? "text" : type}
                        FormHelperTextProps={{ style: { fontFamily: "vazir_regular", fontSize: "var(--small-desktop)" } }}
                        inputProps={{ 
                            style: 
                            { 
                                fontFamily: "vazir_regular, Open Sans", 
                                fontSize: "var(--normal-desktop)",
                                paddingLeft: type === "password" || type === "text" ? "10%" : "3%"
                            } 
                        }}
                        InputLabelProps={{ style: { fontFamily: "vazir_regular", fontSize: "var(--normal-desktop)" } }}
                        fullWidth={fullWidth}
                        name={name}
                        id="outlined-error-helper-text"
                        onChange={onChange}
                        onBlur={onBlur}
                        error={error}
                        label={label}
                        helperText={helperText}
                        variant="outlined"

                    />
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
}