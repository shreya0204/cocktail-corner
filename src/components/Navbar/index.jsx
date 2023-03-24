import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '42ch',
            '&:focus': {
                width: '42ch',
            },
        },
    },
}));

export default function Navbar() {
    const router = useRouter()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                background: '#fff',
                color: '#000',
                boxShadow: 'none',
                marginTop: '2rem',
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: '0.5rem'
                }}>
                    <Box sx={{
                        cursor: 'pointer'
                    }}>
                        <Link href="/">
                            <Image
                                src='/logo.png'
                                alt='Logo'
                                width={160}
                                height={60}
                                sx={{
                                    flexGrow: 1,
                                }}
                            />
                        </Link>
                    </Box>
                    {/* search query */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onClick={(e) => {
                                e.target.value = ''
                            }}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    router.push(`/product?search=${e.target.value}`)
                                }
                            }}
                            placeholder="Search cocktails by name here…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box >
    );
}