"use client"

import { Grid, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Typography, Box, TextField, Pagination, paginationItemClasses } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQueryFetch, useQueryFetch2 } from "../../../hooks/useFetch";
import { Delete, Edit } from "../ActionIcons/ActionIcons";
import { PrimaryButton } from "../Button/Button";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import Popup from 'reactjs-popup';
import { BOX_SHADOWS, PRIMARY_COLOUR, SECONDARY_COLOUR, TABLE_FONT_COLOUR } from "../../../urls/colours";


export default function TableUi(props: any) {

    const router = useRouter();

    const path = usePathname()

    let limit = 2

    const { TABLE_HEAD, TABLE_CELL, API_NAME, heading, isSearch } = props

    const [search, setSearch] = React.useState('')

    const [pageSize, setPageSize] = React.useState(5);
    const [page, setPage] = React.useState(1);

    const handlePage = (page: React.SetStateAction<number>) => setPage(page);

    const { fetchedData, refetch } = useQueryFetch2(API_NAME, page, limit, search === '' ? '' : `?search=${search}`);

    console.log("fetchedData", fetchedData);

    const onSearch = (e: any) => {

        setSearch(e.target.value)

        refetch();

    }

    React.useEffect(() => {

        if (search === '') {

            refetch();

        }

    }, [search])


    React.useEffect(() => {

        refetch();

    }, [page])


    return (

        <Grid container justifyContent="center" sx={{ mt: { xs: 10, md: 0 } }}>



            <Grid container md={11} justifyContent="center"
                alignItems="start" height="fit-content" m={1}>

                <PrimaryButton bgcolor={PRIMARY_COLOUR} my={1} onClick={() => router.push(`${path}/create`,)}>Create {API_NAME}</PrimaryButton>

                {/* {isSearch && <TextField sx={{ mr: 'auto' }}
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    name="search"
                    // value={search}
                    onChange={onSearch}
                />

                } */}


                <TableContainer sx={{ mt: 3, boxShadow: BOX_SHADOWS, borderRadius: "10px" }} >


                    <Table aria-label="simple table">

                        <TableHead sx={{ bgcolor: SECONDARY_COLOUR }}>

                            <TableRow>

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600, color: "black" }} >Si No </Typography>

                                </TableCell>


                                {TABLE_HEAD && TABLE_HEAD.map((table_head: any, index: any) =>

                                    <TableCell align="center" key={index} >

                                        <Typography sx={{ fontWeight: 600, color: "black" }} >{table_head}</Typography>

                                    </TableCell>
                                )
                                }

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600, color: "black" }} >Actions</Typography>

                                </TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {fetchedData && fetchedData?.map((data: any, index: any) =>

                                <TableRow>

                                    <TableCell align="center">

                                        <Typography sx={{ color: TABLE_FONT_COLOUR }}>
                                            {page > 1 ? (page * limit) - 1 + index : page + index}
                                        </Typography>

                                    </TableCell>

                                    {

                                        TABLE_CELL.map((items: any, index: any) =>

                                            <TableCell
                                                key={index} sx={{ cursor: 'pointer' }} align="center">

                                                <Typography sx={{ color: TABLE_FONT_COLOUR }}> {data[items]} </Typography>

                                            </TableCell>

                                        )}


                                    <TableCell align="center">

                                        <Popup trigger={<MoreVertIcon sx={{ cursor: 'pointer', color: "grey" }} />} position="left center">

                                            <Grid container bgcolor="#ffff" sx={{
                                                borderRadius: 1.5,
                                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", p: 1,
                                            }}>

                                                <Edit path={path} id={data.id} />

                                                {/* <Delete url={API_NAME} id={data.id} /> */}

                                                <Delete url={API_NAME} id={data.id} />

                                            </Grid>

                                        </Popup>

                                    </TableCell>

                                </TableRow>

                            )}

                        </TableBody>

                    </Table>


                    {/* <Pagination sx={{ ml: "auto ", width: 'fit-content', p: 2 }}
                        color="primary"
                        count={5}
                        onChange={(event, value) => handlePage(value)}
                        page={page}
                        size="large"
                    /> */}

                </TableContainer>


            </Grid>

        </Grid>


    )

}
