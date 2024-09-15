import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box, Divider } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
    width: '1500px',
    margin: '0 auto',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
}));

const FooterSection = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    '&:last-child': {
        marginBottom: 0,
    },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
    transition: 'color 0.3s',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const QuickLinksContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
}));

const Footer = () => {
    return (
        <FooterContainer>
            
            
            <Typography variant="body2" align="center">
                &copy; {new Date().getFullYear()} Solar-Powered Smart Storage. All rights reserved.
            </Typography>
        </FooterContainer>
    );
};

export default Footer;
