import React from "react";
import { Card, CardMedia, CircularProgress ,Stack, Typography} from "@mui/material";
import { useRecordContext, useShowContext } from "react-admin";


const ShowAside=()=>{
    const record=useRecordContext();
    // if (isLoading) return <CircularProgress/>
    return (
        <Stack direction="column" display='flex' justifyContent='center' alignItems="center" sx={{width:'350px',
        backgroundColor:'white',boxShadow:'1px 1px 2px black',marginLeft:'20px'}}>
        <Typography variant="body2" mt={2} fontFamily='sans-serif'>Images</Typography>
            {record.image.map((item)=>{
    return(
            <Card sx={{width:'250px',mt:4}} key={item}>
                <CardMedia
                   image={item}
                   component="img"
                   height={250}
                />
            </Card>
           )})} 
        </Stack>
    )
    }

export default ShowAside;
