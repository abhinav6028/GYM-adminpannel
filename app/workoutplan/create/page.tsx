"use client"
import React from 'react';
import { Grid, TextField } from "@mui/material";
import axios from 'axios';
import { BASE_URL } from '../../../urls/urls';
import { Field, useFormik } from 'formik';
import useBearerToken from '../../../hooks/useBearerToken';
import { CustomTextField } from '../../../Components/TextField/TextField';
import ImagePreview from "../../../Components/UI/ImagePreview/ImagePreview"


export default function paGride() {

    const token = useBearerToken()
    const [image, setImage]: any = React.useState();

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

            console.log("values", values);


            axios.post(`${BASE_URL}category`, {

                name: values.name,
                description: values.description,
                image: image

            },

                {
                    headers
                }

            ).then((res: any) => {
                console.log('api succesfull');
                console.log("ressssssss", res);
            })

        },


    });

    const formItems = [
        {
            textFieldName: 'Category Name',
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

                <ImagePreview title="Image" image={image} setImage={setImage} />

                    {
                        formItems.map((data, index) =>

                            <CustomTextField formik={formik} data={data} />

                        )
                    }


                   

                    
                    
                </Grid>

                

                <button>Submit</button>

            </form>


        </Grid >
    )
}


