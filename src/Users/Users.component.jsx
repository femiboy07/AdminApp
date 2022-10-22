import React from "react";
import { BooleanField, Datagrid, EditButton, EmailField, List, ReferenceField, ShowButton, TextField } from 'react-admin';
import MyNameField from "../components/MyNameField/MyNameField.component";
import AdminField from "../components/isAdminField/isAdminField.component";

 const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <MyNameField source="name" />
            {/* <TextField source="password" /> */}
            <EmailField source="email" />
            <AdminField source='Admin'/>
            
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>
);

export  default UserList;