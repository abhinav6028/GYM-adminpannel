"use client"
import React from 'react'
import TableUi from '../../Components/UI/TableUi/TableUi';
import { Grid } from '@mui/material';

export default function page() {
    const TABLE_HEAD = ["Category Name", "Description"];

    const TABLE_CELL = ["name", "description"];

    return (
        <Grid container bgcolor="">

            <TableUi

                heading="AVAILABLE STOCKS"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="category"

                isSearch={true}

            />

        </Grid>
    )
}
