"use client"
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";

export default function Footer(){
    const theme = createTheme({
        typography:{
            fontFamily : "Montserrat"
        },
        palette: {
            primary: {
              main: "#EC34A3",
            },
        },
    })
    return(
        <>
            <ThemeProvider theme={theme}>
                <FooterWrap>
                    <div className="logo-box">
                        <img src="/img/logo-b.png" />
                    </div>
                    <ul>
                        <li>
                            <h3>Company</h3>
                            <a href="">How it works</a>
                            <a href="">Pricing</a>
                            <a href="">Docs</a>
                        </li>
                        <li>
                            <h3>Resources</h3>
                            <a href="">Blog post name list goes here</a>
                        </li>
                        <li>
                            <h3>About</h3>
                            <a href="">Terms & Conditions</a>
                            <a href="">Privacy policy</a>
                        </li>
                    </ul>
                </FooterWrap>
                <FooterBottom>
                    <h4>Copyright © 2021 Company name</h4>
                </FooterBottom>
            </ThemeProvider>
        </>
    )
}

const FooterWrap = styled(Box)`
    background-color: #fff;
    padding: 3% 15% 5% 15%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    ul{
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        li{
            margin-right: 8rem;
            h3{
                font-size: 1.8rem;
                color: #000;
                font-weight: bold;
                margin-bottom: 2rem;
            }
            a{
                display: block;
                font-size: 1.4rem;
                color: #000;
                font-weight: 400;
                margin-bottom: 2rem;
            }
        }
        li:last-of-type{
            margin: 0;
        }
    }
    .logo-box{
        img{
            width: 30%;
        }
    }

@media ${() => theme.device.tablet} {
    padding: 10% 5%;
    .logo-box{
        width: 30%;
        img{
            width: 30%;
        }
    }
    ul{
        li{
            margin-right: 3rem;
            h3{
                font-size: 1.6rem;
            }
        }
    }
}
@media ${() => theme.device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    ul{
        margin-top: 3rem;
        flex-direction: column;
        align-items: flex-start;
        li{
            width: 100%;
        }
    }
    .logo-box{
        img{
            width:  8rem;
        }
    }
}
`;

const FooterBottom = styled(Box)`
    padding: 1.5rem 0;
    width: 100%;
    background-color: #fff;
    h4{
        text-align: center;
        font-size: 1.4rem;
        color: rgba(0,0,0,.6);
        font-weight: 500;
    }
`;