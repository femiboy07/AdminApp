import React from "react";
import { AppBar,Typography,Toolbar, IconButton,Badge } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { SidebarToggleButton } from "react-admin";
import { Layout } from "react-admin";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/More';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Box, Container } from "@mui/system";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MyMenu from "../MyMenu/MyMenu.component";


// const drawerWidth=240;



export const MyAppBar=(props)=>(
    
        <Box sx={{display:'flex'}}  >
            <AppBar component="nav"  position="fixed" {...props} >
                <Toolbar>
                <IconButton 
                 
                  aria-label="open drawer"
                    edge="start"
                    sx={{mr:2,display:{sm:'flex',md:'none'}}}
                    >
                    <MenuIcon/>
                    </IconButton>
                   <IconButton>
                    <ShoppingBagIcon sx={{color:'black',display:{md:'none',sm:'none'}}}/>
                    </IconButton> 
                    <Typography
                     variant="h6"
                     component="div"
                     sx={{ flexGrow: 1, display: { md: 'none', sm: 'none' } }}
                     >
                     DAWN
                    </Typography>
                    {/* </Box> */}
            <Box sx={{display:{xs:'flex',sm:'none',width:'100%'},justifyContent:'flex-end'}}>
            <IconButton
              size="large"
              edge="end"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            </Box>   
                <Box sx={{display:{xs:'none',sm:'block'},justifyContent:"flex-end",flexGrow:1}}>
                 <IconButton
                 size="large"
                 aria-label="show 17 new notifications"
                 color="inherit"
                 >
                   <DarkModeIcon />
                 </IconButton>
                 <IconButton
                 size="large"
                 aria-label="show 17 new notifications"
                 color="inherit"
                 >
                 <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
                 </IconButton>
                 <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            
            </Box>
           
           </Toolbar>
                

            </AppBar>
            
           
        </Box>
    )


// export default MyAppBar;