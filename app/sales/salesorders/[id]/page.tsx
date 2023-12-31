"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid } from '@mui/material';
import { message } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import CustomDropDown from '../../../../Components/CustomDropDown/CustomDropDown';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetchByCode, useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';

function page() {
    const router = useRouter()

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const [customerId, setCustomerId] = React.useState('');

    const customers = useQueryFetch('customers').fetchedData


    const formik = useFormik({

        initialValues: {

            customer_id: '',
            POno: '',
            total: '',
            discount: '',
            sub_total: '',
            tax_amount: '',
            grand_total: ''

        },

        //validationSchema: productSchema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}sales-orders`, {

                customer_id: customerId,
                POno: values.POno,
                total: values.total,
                discount: values.discount,
                sub_total: values.sub_total,
                tax_amount: values.tax_amount,
                grand_total: values.grand_total

            },

                {
                    headers
                }

            ).then((res: any) => {

                if (res.data.success) {
                    message.success(res.data.message, 1)
                    router.back()
                } else {
                    message.error(res.data.message, 1,)
                }


            })

        },

        enableReinitialize: true

    });



    const formItems = [
        {
            textFieldName: 'POno',
            id: 'POno',
            name: 'POno',
            type: "text",
        },
        {
            textFieldName: 'Total Amount',
            id: 'total',
            name: 'total',
            type: "number",
        },
        {
            textFieldName: 'Discount',
            id: 'discount',
            name: 'discount',
            type: "number",
        },
        {
            textFieldName: 'Sub Total',
            id: 'sub_total',
            name: 'sub_total',
            type: "number",
        },
        {
            textFieldName: 'Tax Amount',
            id: 'tax_amount',
            name: 'tax_amount',
            type: "number",
        },
        {
            textFieldName: 'Grand Total',
            id: 'grand_total',
            name: 'grand_total',
            type: "number",
        },

    ]




    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 7, }} height="">


            <Grid container justifyContent="center" >

                <Grid container bgcolor="" lg={11} px={10} mt={3} sx={{
                    borderRadius: { xs: 0, lg: 3 },
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto', pb: 10
                }}>

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Customer Sale" />

                        <Grid container >

                            <CustomDropDown fieldName="Customer Name" dropDownData={customers} data={customerId} setData={setCustomerId} />

                            {/* <CustomDropDown fieldName="Sub Categorie" dropDownData={subCategories} data={subCategorie} setData={setSubCategorie} /> */}

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

                                )

                            }

                        </Grid>

                    </form>

                </Grid>

            </Grid >

        </Grid >

    )
}

export default page