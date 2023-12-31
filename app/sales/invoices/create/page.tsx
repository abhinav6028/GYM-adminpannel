/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid, SelectChangeEvent } from '@mui/material';
import axios from 'axios'
import React from 'react';
import CustomeForm from '../../../../Components/CustomeForm/CustomeForm';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';
import { useFormik } from 'formik';

function page() {
    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const { fetchedData } = useQueryFetch('categories');

    const subCategories = useQueryFetch('sub-categories').fetchedData


    console.log("subCategories", subCategories);

    const [categoryId, setCategoryId] = React.useState('');

    // console.log('categoryId', categoryId);

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategoryId(event.target.value as string);
    };

    const [subCategoryId, setSubCategoryId] = React.useState('')

    console.log('subCategoryId', subCategoryId);

    const handleChangeSubCategory = (event: SelectChangeEvent) => {
        setSubCategoryId(event.target.value as string);
    };

    const formik: any = useFormik({

        initialValues: {

            code: '',
            name: '',
            brand: '',
            description: '',
            unit: '',
            category_id: '',
            subcategory_id: '',
            tax_type: '',
            tax_amount: '',

        },

        //validationSchema: employeeShema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}products`, {

                code: values.code,
                name: values.name,
                brand: values.name,
                description: values.description,
                unit: values.unit,
                category_id: categoryId,
                subcategory_id: subCategoryId,
                tax_type: values.tax_type,
                tax_amount: values.tax_amount,

            },

                {
                    headers
                }

            ).then((res: any) => {
                console.log('api succesfull');
                console.log(res);
            })

        },

    });

    const formItems = {
        main: [
            {
                textFieldName: 'Invoice',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Order Number ',
                id: 'name',
                type: "text",
            },
            {
                textFieldName: 'Invoice Date',
                id: 'values.brand',
                type: "date",
            },
            {
                textFieldName: 'Order Number',
                id: 'values.brand',
                type: "number",
            },
            {
                textFieldName: 'Sales Person',
                id: 'values.brand',
                type: "text",
            },
        ],


    }

    const tabName = ["other Datails", "Address", "Contact Persons"]

    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 2 }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" px={10} mt={3} sx={{ borderRadius: 3 }} >

                    <CustomeForm
                        data={formItems.main}
                        formik={formik}
                        heading="New Invoices"
                    />

                </Grid>

            </Grid >

        </Grid >
    )
}

export default page