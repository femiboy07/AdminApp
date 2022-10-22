import React from "react";
import { useRecordContext } from "react-admin";
import { Link } from "react-admin";
import { Box } from "@mui/system";
import { Rating } from "@mui/material";

const RatingField=({source})=>{
    const record=useRecordContext();
    return record ?  (
        <Box >
         <Rating size="small" value={record[source]} name='read-only' readOnly/>
        </Box>
     ):null
}

export default RatingField;