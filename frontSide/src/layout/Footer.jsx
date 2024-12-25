import React from 'react';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import { Instagram, LinkedIn, Phone, Email } from '@mui/icons-material'; // MUI icons for social links

export default function Footer() {
    const theme = useTheme(); // Access the current theme for dynamic color adjustments

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.primary.main, // Footer background color
                color: theme.palette.text.primary, // Text color based on theme
                textAlign: 'center', // Center align all content in the footer
                padding: '1rem', // Padding for spacing inside the footer
                marginTop: 'auto', // Push footer to the bottom of the page (flexbox behavior)
            }}
        >
            {/* Footer Copyright */}
            <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                © {new Date().getFullYear()} Virtual Zoo. All rights reserved.
            </Typography>

            {/* Social Media Links */}
            <Box
                sx={{
                    display: 'flex', // Arrange items horizontally
                    justifyContent: 'center', // Center align the social icons
                    gap: '1rem', // Space between the social media icons
                    marginTop: '0.5rem', // Add spacing above the social links
                    flexWrap: 'wrap', // Ensure icons wrap on small screens for responsiveness
                }}
            >
                {/* Instagram Icon */}
                <IconButton
                    component="a"
                    href="https://www.instagram.com/yourhandle" // Placeholder link for Instagram
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram" // Accessibility label
                    sx={{ color: theme.palette.text.primary }}
                >
                    <Instagram />
                </IconButton>

                {/* LinkedIn Icon */}
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/yourprofile" // Placeholder link for LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn" // Accessibility label
                    sx={{ color: theme.palette.text.primary }}
                >
                    <LinkedIn />
                </IconButton>

                {/* Phone Icon */}
                <IconButton
                    component="a"
                    href="tel:+1234567890" // Placeholder phone number
                    aria-label="Phone" // Accessibility label
                    sx={{ color: theme.palette.text.primary }}
                >
                    <Phone />
                </IconButton>

                {/* Email Icon */}
                <IconButton
                    component="a"
                    href="mailto:your.email@example.com" // Placeholder email address
                    aria-label="Email" // Accessibility label
                    sx={{ color: theme.palette.text.primary }}
                >
                    <Email />
                </IconButton>
            </Box>
        </Box>
    );
}
