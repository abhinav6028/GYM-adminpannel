"use client"
import { Grid } from '@mui/material'
import React from 'react'
import TableUi from '../../../Components/UI/TableUi/TableUi'

function page() {

    const TABLE_HEAD = ["NAME", "DESCRIPTION"];

    const TABLE_CELL = ["name", "description"];

    return (
        <Grid container bgcolor="">

            <TableUi

                heading="All Sub Categories"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="sub-categories"

            />

        </Grid>
    )
}

export default page