'use client';
import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { createTheme, Divider, Icon, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../style/theme';

export default function FilledBtn({ text, link, loading, ...props }) {
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
        <SolidBtnBox
          variant="contained"
          href={link}
          className={loading && 'loading'}
          {...props}
        >
          {loading && <Spinner />}
          {text}
        </SolidBtnBox>
      </ThemeProvider>
    </>
  );
}

const SolidBtnBox = styled(Button)`
  display: flex;
  gap: 2rem;
  font-size: 2rem;
  padding: 1rem 3rem;
  border-radius: 4px;

  &.loading {
    pointer-events: none;
    opacity: 0.6;
  }

  @media ${() => theme.device.tablet} {
    font-size: 1.6rem;
  }
`;

const Spinner = styled(Box)`
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-left-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-left: -0.5rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
