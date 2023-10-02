"use client"
import { Grid } from '@mui/material';
import React from 'react'
import TableUi from '../../Components/UI/TableUi/TableUi';

export default function page() {
    const TABLE_HEAD = ["User Name", "Watsap number", "State"];

    const TABLE_CELL = ["firstName", "whatsApp", "state"];

    return (
        <Grid container bgcolor="">

            <TableUi

                heading="AVAILABLE STOCKS"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="client"

                isSearch={true}

            />

        </Grid>
    )
}
