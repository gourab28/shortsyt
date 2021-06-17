import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const styleSheet = {
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "rgb(255, 255, 255)",
    cursor : "pointer",
    fontFamily: 'Poppins',
  },
  appBar : {
    background : "#FF0000",
    color : "rgb(255, 255, 255)",
    fontFamily: 'Poppins',
  },
 Tlogo : {
    textAlign: "center",
    fontFamily: 'Poppins',
  },
}

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar className = {this.props.classes.appBar} >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

              <Typography className = {this.props.classes.Tlogo} color="inherit" variant = "h4">ShortsLoader</Typography>
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider>
               <Link className="nav_link" to="/">
                 Home
               </Link>
               </ListItem>
               <ListItem key = {2} button divider>
               <Link className="nav_link" to="/about">
               About Us
               </Link>
              </ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar className = {this.props.classes.appBar}>
        <Toolbar>
          <Typography className = {this.props.classes.Tlogo} variant = "headline" style={{flexGrow:1}} color="inherit" >YtShots</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >
          <Link to="/">
           Home</Link>
          </Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" ><Link to="/about">About</Link></Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" ></Typography>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);