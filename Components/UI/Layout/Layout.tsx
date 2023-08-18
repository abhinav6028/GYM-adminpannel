import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import { SideBar } from '../SideBar/SideBar'
import MobileHeader from '../Header/MobileHeader'

export default function Layout({ children }: any) {
    return (
        <Grid container>
            <Grid container sx={{ bgcolor: '', height: 'fit-content', borderBottom: '1px solid lightgrey' }}>
                <Header />
            </Grid>

            <Grid>
                <MobileHeader />

            </Grid>


            <Box sx={{ width: "100%", display: "flex", backgroundColor: "white" }}>

                <SideBar />

                <Grid container>

                    {children}

                </Grid>

            </Box >
        </Grid >
    )
}
