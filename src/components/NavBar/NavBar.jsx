import { Button } from '@mui/material';
import React from 'react';
import "../Main/Main.scss"



export default function NavBar({ random }) {
    return (
        <nav className='header__wrapper'>
            <div className='header--LH'>
                <h1>Bartender</h1>
            </div>
            <div className='header--RH'>
                <Button
                    variant="contained"
                    type='submit'
                    onClick={random}
                >
                    Random
                </Button>
            </div>

        </nav>

    )
}
