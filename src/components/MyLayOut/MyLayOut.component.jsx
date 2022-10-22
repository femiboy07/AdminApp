import React from "react";
import { Layout } from "react-admin";
import { MyAppBar } from "../MyAppBar/MyAppBar.component";
import { MyMenu } from "../MyMenu/MyMenu.component";

 const MyLayOut=()=>(
    <Layout  appBar={MyAppBar} menu={MyMenu}/>
)

export default MyLayOut;