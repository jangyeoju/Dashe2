'use client';
import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { createTheme, Divider, Icon, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import theme from '@/app/style/theme';
import Nav from '@/app/components/nav/Nav';
import Footer from '@/app/components/footer/Footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SolidBtn from '@/app/components/button/SolidBtn';
export default function Result() {
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
        <ResultWrap>
          <CheckCircleIcon />
          <h2>
            데이터 전송이 모두 완료되었습니다. <br />
            작업물은 24시간내에 이메일로 전달드립니다.
          </h2>
          <SolidBtn text={'메인으로 돌아가기'} link={'/'} />
        </ResultWrap>

        <Footer />
      </ThemeProvider>
    </>
  );
}

const ResultWrap = styled(Box)`
  padding-top: 10rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    color: #ec34a3;
    width: 20rem;
    height: 20rem;
  }
  h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    line-height: 150%;
    margin: 2rem 0 5rem 0;
  }
  @media ${() => theme.device.mobile} {
  }
`;
