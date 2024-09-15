import React from "react";
import { Box, Typography, Container, Grid, Card, CardMedia } from "@mui/material";

const ProblemSolution = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#3a5f0b' }}>
        Smart Agro Storage System
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {/* Problem Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Problem Image"
              height="300"
              image="https://via.placeholder.com/600x300?text=Problem+Image"
              title="Problem"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#6b8e23' }}>
              Problem Statement:
            </Typography>
            <Typography variant="body1" paragraph>
              The Smart Agro Storage system is a Solar-Powered, Smart Storage System that utilizes IoT sensors
              to monitor and control environmental conditions in real-time. This ensures an optimized storage
              environment for maximum freshness and shelf life of agricultural products while reducing dependency
              on the electrical grid.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {/* Solution Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#6b8e23' }}>
              Our Solution:
            </Typography>
            <Typography variant="body1" paragraph>
              Our system integrates IoT sensors that monitor critical environmental factors such as temperature,
              humidity, and air quality. With solar energy powering the system, it reduces reliance on traditional
              electricity sources. Additionally, the storage environment is controlled in real-time, automatically
              adjusting based on sensor readings, ensuring that agricultural products remain fresh for extended periods.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Solution Image"
              height="300"
              image="https://via.placeholder.com/600x300?text=Solution+Image"
              title="Solution"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProblemSolution;
