import React from 'react';
import { ArrayField,EditButton,ShowButton, BooleanField, ChipField, Datagrid, DateField, Edit, List, NumberField, ReferenceField, Show, SingleFieldList, TextField } from 'react-admin';
import PartsPage from '../components/Partspage/Partspage.component';
import RatingField from '../components/RatingField/RatingField.component';
 const ProductList = () => (
   
   <List>
        <Datagrid rowClick="show" sx={{"& .RaDatagrid-thead":{
            backgroundColor:'red'
        }}}>
            <TextField source="id" />
            <TextField source="name" />
            {/* <TextField source="description" /> */}
            <ArrayField source='categories' >
                <SingleFieldList >
                    <ChipField  source='categories'/>
                </SingleFieldList>
            </ArrayField>
            {/* <TextField source="image" /> */}
            {/* <ArrayField source="parts">
                <SingleFieldList><ChipField source="partimage" /></SingleFieldList>
            </ArrayField> */}
            <NumberField source="numReviews" />
            <TextField source="ProductType" />
            <TextField source="brand" />
            <RatingField source="rating" />
            <DateField source="createdAt" />
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>

);

export default ProductList;

