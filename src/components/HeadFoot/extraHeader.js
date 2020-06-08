import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { ListItem, Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import SignIn from './sign_in';
import './style.css';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#01B1EF',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },    
    footer : {
      width: 500,
    },
    modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  logo: {
    maxWidth: 160,
  },
}));

export default function Index() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const signinCancel =(signinCancel) =>{
    setOpen1(signinCancel);
  };


  return (





       <div>
        <div className={classes.root}>
      <AppBar position="fixed" className="navbar1">
        <Toolbar>
           <img src={"https://agidmc.com/images/logo.svg"} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
        
          </Typography>



 


          <Button  color="inherit" onClick={handleOpen1}>Signin</Button>
      




        <Button color ="inherit"
        aria-controls="customized-menu"
        aria-haspopup="true"
         //variant="contained"
        // color="white"
        onClick={handleClick1}
      >
        Follow Us
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link underline ="none" color ="inherit"  href="https://www.facebook.com/AGiDMC/">
        <StyledMenuItem >         
          <ListItemIcon >
            <FacebookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </StyledMenuItem>

        </Link>
          
        <Link underline ="none" color ="inherit" href="https://twitter.com/agi_dmc" >
        <StyledMenuItem>
          <ListItemIcon>
            <TwitterIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="twitter" />
        </StyledMenuItem>
        </Link>
        
        <Link underline ="none" color ="inherit" href="https://www.instagram.com/agidmc/" >
        <StyledMenuItem>
          <ListItemIcon>
            <InstagramIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="instagram" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="https://www.pinterest.com/AGiDMC/c" >
        <StyledMenuItem>
          <ListItemIcon>
            <PinterestIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="pinterest" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="https://www.linkedin.com/company/agidmc/?originalSubdomain=cl" >
        <StyledMenuItem>
          <ListItemIcon>
            <LinkedInIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="linkedIn" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="https://api.whatsapp.com/send?phone=6596531921&text=&source=&data=&app_absent=" >
        <StyledMenuItem>
          <ListItemIcon>
            <WhatsAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="whatsapp" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="https://www.youtube.com/channel/UCDaRE5WFvp6KBrGNYXVs6jg?view_as=public" >
        <StyledMenuItem>
          <ListItemIcon>
            <YouTubeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="youtube" />
        </StyledMenuItem>
        </Link>
      </StyledMenu>


        </Toolbar>
      </AppBar>
    </div>
      

    

      <Grid xs={8} sm={6}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open1}
        onClose={()=>{handleClose1();
                      signinCancel();}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open1}>
          <Grid xs={12} sm ={6}>
          <div className={classes.paper}>
         
         <SignIn />         
          </div>
          </Grid>
        </Fade>
      </Modal>
      </Grid>
    </div>
  );
}