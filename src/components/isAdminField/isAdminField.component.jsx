import { Typography ,Box, Chip} from "@mui/material";
import React from "react";
import { ChipField, SingleFieldList, useRecordContext } from "react-admin";


const AdminField=({source})=>{
    
    const record=useRecordContext();
    return record ? (
       record[source] === true ? 
       <Box sx={{width:'100%',display:"flex",justifyContent:'center',color:"whitesmoke"}}>
        <Typography variant='subtitle2' textAlign="center" fontSize='12px' bgcolor='	#454B1B' height='40' borderRadius="5px" width={40}> Yes</Typography>
        </Box>:
        <Box sx={{width:'100%',display:"flex",justifyContent:'center',color:'whitesmoke'}}>
        <Typography variant="subtitle2" width={40} height='40' fontSize="12px" textAlign="center" borderRadius='5px' bgcolor='red'>No</Typography>
         </Box> 
    ):null
}

export default AdminField