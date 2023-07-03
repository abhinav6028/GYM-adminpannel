import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { items } from './helpers';


export default function SubSideBar() {

    const router = useRouter();

    return (
        <Grid container justifyContent="center">
            <Sidebar style={{ width: '100%' }}>
                <Menu>
                    {
                        items.map((data, index) =>

                            <SubMenu key={index} label={data.name}>

                                {
                                    data?.subRouts?.map((item, index) =>

                                        <MenuItem key={index} onClick={() => router.push(`${item.path}`)}>

                                            <Typography> {item.name} </Typography>

                                        </MenuItem>

                                    )
                                }
                            </SubMenu>
                        )
                    }

                </Menu>
            </Sidebar>
        </Grid>
    )
}
