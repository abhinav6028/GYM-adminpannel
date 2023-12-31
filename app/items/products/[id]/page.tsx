
"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import { SelectChangeEvent, Grid, Typography, FormControl, InputLabel, Select, TextField, Button } from '@mui/material';
import { message } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { MenuItem } from 'react-pro-sidebar';
import CustomDropDown from '../../../../Components/CustomDropDown/CustomDropDown';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch, useQueryFetchByCode } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';
import { productSchema } from '../validation';

function page() {
  const router = useRouter();

  const token = useBearerToken()

  const { id } = useParams();

  const data = useQueryFetchByCode('products', id)

  const categorieArray: { name: any; id: any; }[] = [];

  const subCategorieArray: { name: any; id: any; }[] = [];

  const finalData = data.fetchedData;

  const drop = finalData?.category?.name;

  const headers = {

    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',

  };

  const [categorie, setCategorie] = React.useState('');

  const [subCategorie, setSubCategorie] = React.useState('');

  const categories = useQueryFetch('categories').fetchedData;

  categories?.map((data: any, index: any) => {

    categorieArray.push({
      name: data.name,
      id: data.id
    })

  })

  const subCategories = useQueryFetch(`sub-categories/list/${categorie}`).fetchedData;

  subCategories?.map((data: { name: any; id: any; }, index: any) => {

    subCategorieArray.push({
      name: data.name,
      id: data.id
    })

  })

  console.log("subCategorieArray", subCategorieArray);



  const formik = useFormik({

    initialValues: {
      code: finalData?.code,
      name: finalData?.name,
      brand: finalData?.brand,
      description: finalData?.description,
      unit: finalData?.unit,
      unit_price: finalData?.unit_price,
      category_id: finalData?.category_id,
      subcategory_id: finalData?.subcategory_id,
      tax_type: finalData?.tax_type,
      tax_amount: finalData?.tax_amount,
      remarks: finalData?.remarks
    },

    validationSchema: productSchema,

    onSubmit: values => {

      axios.patch(`${BASE_URL}products/${finalData?.id}`, {

        code: values.code,
        name: values.name,
        brand: values.brand,
        description: values.description,
        unit: values.unit,
        unit_price: values.unit_price,
        category_id: categorie,
        subcategory_id: subCategorie,
        tax_type: values.tax_type,
        tax_amount: values.tax_amount,
        remarks: values.remarks

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

    //validationSchema: SignUpSchema
    enableReinitialize: true

  });

  const formItems = [
    {
      textFieldName: 'Code',
      id: 'code',
      name: 'code',
      type: "text",
    },
    {
      textFieldName: 'Name',
      id: 'name',
      name: 'name',
      type: "text",
    },
    {
      textFieldName: 'Brand',
      id: 'brand',
      name: 'brand',
      type: "text",
    },
    {
      textFieldName: 'Description',
      id: 'description',
      name: 'description',
      type: "text",
    },
    {
      textFieldName: 'Unit',
      id: 'unit',
      name: 'unit',
      type: "number",
    },
    {
      textFieldName: 'Unit Price',
      id: 'unit_price',
      name: 'unit_price',
      type: "number",
    },
    {
      textFieldName: 'Tax type',
      id: 'tax_type',
      name: 'tax_type',
      type: "text",
    },
    {
      textFieldName: 'Tax amount',
      id: 'tax_amount',
      name: 'tax_amount',
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

            <FormHeader type="edit" heading="Edit Product" />

            <Grid container >

              <CustomDropDown type="edit" fieldName="category" drop={drop} dropDownData={categorieArray} data={categorie} setData={setCategorie} />

              <CustomDropDown fieldName="Sub Categorie" dropDownData={subCategorieArray} data={subCategorie} setData={setSubCategorie} />

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