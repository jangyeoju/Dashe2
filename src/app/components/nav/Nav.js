"use client"
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
import ContainerBox from "../layout/ContainerBox";
import MenuIcon from '@mui/icons-material/Menu';
import SolidBtn from "../button/SolidBtn";

export default function Nav({select}){
    return(
        <>
                <NavWrap>
                    <a href="/">
                        <div className="logo-box">
                            <img src="/img/logo-w.png" />
                        </div>
                    </a>
                    <div className="menu-list">
                        <a href="" className={select == "about" ? "select" : ""}>
                            About
                        </a>
                        <a href="/project" className={select == "projects" ? "select" : ""}>
                            Projects
                        </a>
                        <a href="/create" className={select == "create" ? "select" : ""}>
                            Create
                        </a>
                        {/* <IconButton>
                            <MenuIcon/>
                        </IconButton> */}
                    </div>
                </NavWrap>
        </>
    )
}

const NavWrap = styled(Box)`
    padding: 2% 15% 1% 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    position: fixed;
    width: 100%;
    background-color: #000;

    .logo-box{
        img{
            width: 25%;
        }
    }
    .select{
        text-decoration: underline;
    }
    .menu-list{
        display: flex;
        align-items: center;
        a{
            font-size: 1.6rem;
            color: #fff;
            font-weight: 400;
            margin-right: 3rem;
        }
        a:last-of-type{
            margin: 0;
            font-weight: bold;
            color: #EC34A3;
        }
        button{
            svg{
                width: 2.5rem;
                height: 2.5rem;
            }
        }
    }

    @media ${() => theme.device.tablet} {
        padding: 2% 5%;
        .logo-box{
            img{
                width: 25%;
            }
        }
    }
    @media ${() => theme.device.mobile} {
        padding: 5%;
    }
`;