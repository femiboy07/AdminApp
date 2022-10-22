import React from "react";
import { Menu } from "react-admin";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const MyMenu=(props)=>(
    <Menu {...props}>
            <Menu.DashboardItem sidebarIsOpen/>
            <Menu.Item to="/users" primaryText="Users" leftIcon={PeopleAltIcon}/>
            <Menu.Item to="/products" primaryText="Products" leftIcon={PeopleAltIcon}/>
    </Menu>
 )


// export default MyMenu;