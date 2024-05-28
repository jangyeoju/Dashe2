'use client';
import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { createTheme, Divider, Icon, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import theme from '@/app/style/theme';
import Nav from '@/app/components/nav/Nav';
import SolidBtn from '@/app/components/button/SolidBtn';
import AddIcon from '@mui/icons-material/Add';
import Footer from '@/app/components/footer/Footer';
import FilledBtn from '@/app/components/button/FilledBtn';
import SubmitForm from '@/app/components/pages/create/SubmitForm';

export default function Create() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
    },
    palette: {
      primary: {
        main: '#EC34A3',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav select={'create'} />
        <SubBanner>
          <h1>
            You can create <br />
            the image you want
          </h1>
          <h3>원하는 SNS 채널별 이미지를 사이즈에 맞게 생성해드립니다.</h3>
        </SubBanner>

        <SubmitForm />

        <Footer />
      </ThemeProvider>
    </>
  );
}

const SubBanner = styled(Box)`
  background-image: url(../img/subBanner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 6rem;
    color: #fff;
    line-height: 130%;
    text-align: center;
    margin: 0 0 2rem 0;
    letter-spacing: -1.5px;
  }
  h3 {
    color: #fff;
    line-height: 130%;
    text-align: center;
    font-size: 2.4rem;
  }
  @media ${() => theme.device.mobile} {
    height: 35rem;
    padding: 5rem 2rem 0 2rem;
    h1 {
      font-size: 3.5rem;
    }
  }
`;
