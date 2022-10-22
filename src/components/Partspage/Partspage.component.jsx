import { useGetOne, useRedirect,Title, TabbedShowLayout,Show, Tab ,TextField, ImageField,
     ReferenceManyField, Datagrid, NumberField, ReferenceField,List, ArrayField,ReferenceArrayField, EditButton, DateField, ListContext} from "react-admin";
import { useParams } from "react-router-dom";
import {Card, CircularProgress,Box, CardContent, Divider} from '@mui/material';
import ShowAside from "../showAside/showAside.component";
import RatingField from "../RatingField/RatingField.component";
import MyNameField from "../MyNameField/MyNameField.component";

const PartsPage=()=>(
    // const params=useParams();
    // const {id}=params;
    // const redirect=useRedirect();
    // const {data,isLoading}=useGetOne('products',{id},{onError:()=>redirect('/products')});
    // if(isLoading){
    //     return(
    //         <CircularProgress/>
    //     )
    // }
   
       <Show title="Show Product"  >
        <TabbedShowLayout divider={<Divider flexItem/>}>
          <Tab label='details'>
          <TextField source="id" name="id" label="Id"/>
          <TextField source="name" name="name" label="Name"/>
          <TextField source="ProductType" name="ProductType" label="ProductType"/>
          </Tab>
          <Tab label="Reviews">
            <ArrayField  source="reviews" 
 >
              <Datagrid  rowClick='toogleSelection' sx={{'& .RaDatagrid-headerCell':{
                backgroundColor:'rgba(244,245,247,1)',
                // '& .RaDatagrid-rowEven':{
                //   background:'red'
                // }
              }}}>
              <DateField source="createdAt" label="Date"/>
                <MyNameField source='name'/>
               <TextField source="comment"/>
                <RatingField source="rating"/>
                 <ReferenceField label='Email' source="user" reference="users">
                  <TextField source="email"/>
                </ReferenceField>
                </Datagrid> 
                </ArrayField>
                 
            

          </Tab>
        </TabbedShowLayout>
       </Show>
    
)


export default PartsPage;