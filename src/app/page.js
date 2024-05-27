"use client"
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../app/style/theme";
import Nav from "./components/nav/Nav";
import ContainerBox from "./components/layout/ContainerBox";
import SolidBtn from "./components/button/SolidBtn";
import AddIcon from '@mui/icons-material/Add';
import Footer from "./components/footer/Footer";
export default function Home() {
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


  return (
   <>
      <ThemeProvider theme={theme}>
      <Nav />
      <MainBanner>
        <h1>We exist wherever <br/> design is needed,   wherever it is</h1>
        <SolidBtn text={"Get Started"} link={"/create"}/>
      </MainBanner>
      <ContainerBox>
        <Subtitle>
           <h2>Latest Work</h2>
        </Subtitle> 
        <Col>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img1" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img2" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img3" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img4" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img5" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img6" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img7" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img8" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img9" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img10" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img11" />
          </a>
          <a href="" className=" w-3">
            <ImgBox className="img-box" id="img12" />
          </a>
          <div className="center">
              <Button className="add-btn" href="/project">
                More View <AddIcon/>
              </Button>
          </div>
        </Col>
      </ContainerBox>
      <Footer />
      </ThemeProvider>
   </>
  );
}

const MainBanner = styled(Box)`
    background-image: url(../img/background.png);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    height: 113vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 15rem;

    h1{
      font-size: 6rem;
      color: #fff;
      line-height: 130%;
      text-align: center;
      margin: 0 0 2rem 0;
      letter-spacing: -1.5px;
    }
    @media ${() => theme.device.desktop} {
      height: 100vh;
    }

    @media ${() => theme.device.tablet} {
      height: 80vh;
      h1{
        font-size: 4rem;
        padding: 0 5%;
      }
    }
    @media ${() => theme.device.mobile} {
      height: 100vh;
      background-size: cover;
      padding-top: 10rem;
      h1{
        font-size: 3.5rem;
      }
    }
`;


const Col = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 7rem;
  a{
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 3rem;
  }
  .center{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
  }
  .add-btn{
    color: #EC34A3;
    font-size: 1.6rem;
    svg{
      width: 2rem;
      height: 2rem;
      color: #EC34A3;
    }
  }
  #img1{
    background-image: url(../img/1box.png);
  }
  #img2{
    background-image: url(../img/2box.png);
  }
  #img3{
    background-image: url(../img/3box.png);
  }

  #img4{
    background-image: url(../img/4box.png);
  }
  #img5{
    background-image: url(../img/5box.png);
  }
  #img6{
    background-image: url(../img/6box.png);
  }

  #img7{
    background-image: url(../img/7box.png);
  }
  #img8{
    background-image: url(../img/8box.png);
  }
  #img9{
    background-image: url(../img/9box.png);
  }

  #img10{
    background-image: url(../img/10box.png);
  }
  #img11{
    background-image: url(../img/11box.png);
  }
  #img12{
    background-image: url(../img/12box.png);
  }
  .w-3{
    width: 32%;
  }

  @media ${() => theme.device.tablet} {
    a{
      margin-bottom: 2rem;
    }
    .w-3{
      width: 48%;
    }
  }

`;

const ImgBox = styled(Box)`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;


    transition: all .5s ease-in-out;
    &:hover{
      transform: scale(1.15);
    }

  @media ${() => theme.device.tablet} {
    height: 20rem;
  }  

  @media ${() => theme.device.mobile} {
    height: 15rem;
  }
`;


const Subtitle = styled(Box)`
  margin: 10rem 0 5rem 0;
  h2{
    font-size: 3.5rem;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  @media ${() => theme.device.tablet} {
    h2{
      font-size: 3rem;
    }
  }
`;