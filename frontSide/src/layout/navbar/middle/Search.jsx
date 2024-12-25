import React from 'react';
import { IconButton, Box, TextField, InputAdornment, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Search icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon to close the search bar
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Search({ isOpen, toggleSearch }) {
    const theme = useTheme(); // Access current theme for styling.
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const handleSearchChange = (event) => {
        const query = event.target.value;
        if (query) {
            setSearchParams({ search: query });
            navigate(`/exhibits?search=${encodeURIComponent(query)}`);
        } else {
            setSearchParams({});
            navigate('/exhibits');
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Conditionally render the search icon when the search bar is closed */}
            {!isOpen && (
                <IconButton onClick={toggleSearch} color="inherit">
                    <SearchIcon />
                </IconButton>
            )}

            {/* Conditionally render the search input field when the search bar is open */}
            {isOpen && (
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    sx={{
                        position: 'relative', // To position the close icon inside the input field
                        flex: 1,
                        maxWidth: '100%',
                        margin: "5px",
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper, // Set background color from theme
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: theme.palette.divider, // Set border color from theme
                            },
                            '&:hover fieldset': {
                                borderColor: theme.palette.primary.main, // Change border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: theme.palette.primary.main, // Change border color when focused
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {/* Icon button to close the search bar, positioned top-right and resized */}
                                <IconButton
                                    onClick={toggleSearch}
                                    sx={{
                                        position: 'absolute',
                                        right: 2, // Place it 8px from the right
                                        bottom: 2,   // Place it 8px from the top
                                        fontSize: '18px', // Adjust the size of the icon
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    autoFocus // Automatically focus the input field when opened
                />
            )}
        </Box>
    );
}
