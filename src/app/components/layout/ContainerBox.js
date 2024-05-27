'use client';
import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { createTheme, Divider, Icon, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../../app/style/theme';

export default function ContainerBox({ children }) {
  return (
    <>
      <ContainerBoxWrap>{children}</ContainerBoxWrap>
    </>
  );
}

const ContainerBoxWrap = styled(Box)`
  padding: 0 15%;
  @media ${() => theme.device.tablet} {
    padding: 0 5%;
  }
`;
