"use client"
import React from 'react'
import useBearerToken from '../../../hooks/useBearerToken';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../../urls/urls';
import { Grid } from '@mui/material';
import { CustomTextField } from '../../../Components/TextField/TextField';

function page() {
    const token = useBearerToken()



    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const formik = useFormik({

        initialValues: {
            name: '',
            description: '',
            image: ''

        },

        // validationSchema: employeeShema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}category`, {

                name: values.name,
                description: values.description,
                image: values.image
            },

                {
                    headers
                }

            ).then((res: any) => {
                console.log('api succesfull');
                console.log(res);
            })

        },

        //validationSchema: SignUpSchema

    });

    const formItems = [
        {
            textFieldName: 'Name',
            id: 'name',
            type: "text",
        },
        {
            textFieldName: 'Code',
            id: 'name',
            type: "text",
        },
        {
            textFieldName: 'Description',
            id: 'description',
            type: "text",
        },

    ]

    return (
        <Grid container sx={{ bgcolor: '' }}>

            <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                <Grid container md={4} sx={{ mx: 4 }}>

                    {
                        formItems.map((data, index) =>

                            <CustomTextField formik={formik} data={data} />

                        )
                    }

                </Grid>

            </form>


        </Grid >
    )
}

export default page
