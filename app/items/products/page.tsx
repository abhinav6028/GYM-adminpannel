"use client"

import { Grid } from '@mui/material'
import React from 'react'
import TableUi from '../../../Components/UI/TableUi/TableUi';

function page() {

  const TABLE_HEAD = ["Product", "State", "Unit", "Created At"];

  const TABLE_CELL = ["name", "state", "unit", "category_id"];

  return (

    <Grid container bgcolor="">

      <TableUi

        heading="AVAILABLE STOCKS"

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="products"

        isSearch={true}
        

      />

    </Grid>
  )
}

export default page

