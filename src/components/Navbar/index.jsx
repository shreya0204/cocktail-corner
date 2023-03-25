import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from "next/router";
import debounce from "lodash/debounce";
import ClearIcon from '@mui/icons-material/Clear';


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
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = debounce((searchValue) => {
        console.log(searchValue)
        router.push(`/product?search=${searchValue}`);
    }, 500); // Debounce time set to 500ms

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        handleSearch(value);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                background: '#fff',
                color: '#000',
                boxShadow: 'none',
                marginTop: '1rem',
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
                            // onChange={(e) => {
                            //     router.push(`/product?search=${e.target.value}`)
                            // }}
                            onChange={handleChange}
                            placeholder="Search cocktails by name here…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        {/* <ClearIcon fontSize={'small'} color={'action'} cursor={'pointer'} /> */}
                    </Search>
                </Toolbar>
            </AppBar>
        </Box >
    );
}