import React from 'react';
import { IconButton, Box, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme as useCustomTheme } from '../../../providers/CustomThemeProvider'; // Rename for clarity

export default function SwitchMode() {
  const { isDark, toggleDarkMode } = useCustomTheme(); // Theme state and toggle function from custom provider
  const theme = useTheme(); // Access Material UI's theme for consistent styling

  // Dynamic styles based on theme
  const iconColor = isDark ? '#F09319' : theme.palette.text.primary; // Orange for dark mode, default text for light mode
  const boxShadow = isDark
    ? 'inset -1px 0px 13px 5px rgba(240, 147, 25, 0.5)' // Glowing effect for dark mode
    : '0 4px 8px rgba(0, 0, 0, 0.2)'; // Subtle shadow for light mode

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        gap: 2, // Consistent spacing if additional elements are added
      }}
    >
      {/* Button for theme toggle */}
      <IconButton
        sx={{
          color: iconColor,
          backgroundColor: isDark ? 'transparent' : theme.palette.background.default, // Transparent for dark mode
          borderRadius: '50%', // Circular button
          padding: '8px', // Compact padding
          boxShadow: boxShadow, // Dynamic shadow based on theme
          transition: 'all 0.3s ease', // Smooth transition effect
          '&:hover': {
            backgroundColor: isDark ? 'transparent' : theme.palette.background.paper, // Light mode hover effect
            boxShadow: isDark
              ? '0 4px 12px rgba(240, 147, 25, 0.8)' // Stronger glow for dark mode
              : '0 6px 12px rgba(0, 0, 0, 0.3)', // Subtle shadow enhancement for light mode
            transform: 'scale(1.05)', // Slight grow effect
          },
          '&:active': {
            transform: 'scale(1)', // Reset scale on click
          },
          '&:focus': {
            outline: 'none', // Remove focus outline for a clean look
          },
        }}
        onClick={toggleDarkMode}
      >
        {/* Icons representing the current mode */}
        {isDark ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
}
