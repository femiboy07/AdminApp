import React from "react";
import { useRecordContext } from "react-admin";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-admin";


const MyNameField=({source})=>{
    const record=useRecordContext();
    return record ? (
     <Link href={record[source]} sx={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
       <AccountCircleIcon fontSize="medium" />
      <span >{record[source]}</span>
     </Link>
    ):null
}

export default  MyNameField;