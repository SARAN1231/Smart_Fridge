import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const FormContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
}));

const FormField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const RequestDemo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setOpenSnackbar(true);
        // Clear form data
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <FormContainer>
            <Typography variant="h4" gutterBottom>
                Request a Demo
            </Typography>
            <Typography variant="body1" paragraph>
                Fill out the form below to request a demo of our Solar-Powered Smart Storage system. Our team will get in touch with you shortly to schedule a convenient time.
            </Typography>
            <form onSubmit={handleSubmit}>
                <FormField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <FormField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <FormField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <FormField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                />
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit Request
                    </Button>
                </Box>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Your request has been submitted!"
            >
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Your request has been submitted successfully. We will contact you soon.
                </Alert>
            </Snackbar>
        </FormContainer>
    );
};

export default RequestDemo;
