import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CSSTransition } from 'react-transition-group';
import Header from '../header';
import '../css/AboutUs.css'; // Import the CSS file for animations
import Footer from './Footer';

// Define custom styles
const RootContainer = styled(Container)(({ theme }) => ({
    width: '1500px',
    margin: '0 auto',
    padding: theme.spacing(4),
    textAlign: 'center',
}));

const MissionText = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

const TeamCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: theme.spacing(2),
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const TeamImage = styled(CardMedia)(({ theme }) => ({
    height: 140,
}));

const AboutUs = () => {
    const [showContent, setShowContent] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 500); // Delay content rendering for fade effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            
            <RootContainer>
                <CSSTransition
                    in={showContent}
                    timeout={1000}
                    classNames="fade"
                    unmountOnExit
                >
                    <Box>
                        
                    <h1 className="text-5xl font-bold p-10 text-center" style={{ color: '#4CAF50' }}>Team Members</h1>
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12} sm={6} md={4}>
                                <TeamCard>
                                    <TeamImage
                                        component="img"
                                        alt="John Doe"
                                        image="https://via.placeholder.com/345x140"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">John Doe</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Chief Technology Officer
                                        </Typography>
                                        <Typography variant="body2" paragraph>
                                            John leads our technology team with a passion for innovation and sustainability. He ensures our smart storage solutions are at the forefront of technological advancement.
                                        </Typography>
                                    </CardContent>
                                </TeamCard>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <TeamCard>
                                    <TeamImage
                                        component="img"
                                        alt="John Doe"
                                        image="https://via.placeholder.com/345x140"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">John Doe</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Chief Technology Officer
                                        </Typography>
                                        <Typography variant="body2" paragraph>
                                            John leads our technology team with a passion for innovation and sustainability. He ensures our smart storage solutions are at the forefront of technological advancement.
                                        </Typography>
                                    </CardContent>
                                </TeamCard>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <TeamCard>
                                    <TeamImage
                                        component="img"
                                        alt="John Doe"
                                        image="https://via.placeholder.com/345x140"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">John Doe</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Chief Technology Officer
                                        </Typography>
                                        <Typography variant="body2" paragraph>
                                            John leads our technology team with a passion for innovation and sustainability. He ensures our smart storage solutions are at the forefront of technological advancement.
                                        </Typography>
                                    </CardContent>
                                </TeamCard>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <TeamCard>
                                    <TeamImage
                                        component="img"
                                        alt="John Doe"
                                        image="https://via.placeholder.com/345x140"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">John Doe</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Chief Technology Officer
                                        </Typography>
                                        <Typography variant="body2" paragraph>
                                            John leads our technology team with a passion for innovation and sustainability. He ensures our smart storage solutions are at the forefront of technological advancement.
                                        </Typography>
                                    </CardContent>
                                </TeamCard>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <TeamCard>
                                    <TeamImage
                                        component="img"
                                        alt="Jane Smith"
                                        image="https://via.placeholder.com/345x140"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">Jane Smith</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Operations Manager
                                        </Typography>
                                        <Typography variant="body2" paragraph>
                                            Jane oversees the daily operations of our storage systems, ensuring smooth and efficient processes that keep our technology running flawlessly.
                                        </Typography>
                                    </CardContent>
                                </TeamCard>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <TeamCard>
                                    <TeamImage
                                        component="img"
                                        alt="Emily Johnson"
                                        image="https://via.placeholder.com/345x140"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">Emily Johnson</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Product Designer
                                        </Typography>
                                        <Typography variant="body2" paragraph>
                                            Emily designs user-friendly interfaces and ensures that our smart storage systems are not only functional but also aesthetically pleasing.
                                        </Typography>
                                    </CardContent>
                                </TeamCard>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </CSSTransition>
            </RootContainer>
            
        </>
    );
};

export default AboutUs;
