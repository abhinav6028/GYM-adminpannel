"use client"
import React from 'react';
import { Grid, TextField } from "@mui/material";
import axios from 'axios';
import { BASE_URL } from '../../../urls/urls';
import { Field, useFormik } from 'formik';
import useBearerToken from '../../../hooks/useBearerToken';
import { CustomTextField } from '../../../Components/TextField/TextField';
import ImagePreview from "../../../Components/UI/ImagePreview/ImagePreview"
import { useRouter } from 'next/navigation';


export default function paGride() {

    const router = useRouter()

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
                router.back();
            })

        },


    });

    const formItems = [
        {
            textFieldName: 'Category Name',
            id: 'name',
            type: "text",
            rows:'1'
        },
        {
            textFieldName: 'Description',
            id: 'description',
            type: "text",
            rows:'5'
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


