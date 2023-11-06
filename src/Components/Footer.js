import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="50px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      {/* <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} /> */}
      <h1>FLEX GYM</h1>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px"> The pain you feel today will be the strength you feel tomorrow</Typography>
  </Box>
);

export default Footer;