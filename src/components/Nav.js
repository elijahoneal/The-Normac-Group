
import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router';
import { styled } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const NavBar = styled(Paper)({
  backgroundColor:  'green',
  '@media (min-width: 800px)': {
    backgroundColor: 'red'
  }

})

const Nav = () => {

  const [value, setValue] = React.useState(2);
  const { push } = useHistory()
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
    switch(newValue){
      case 0:
        push("/");
        break;
      case 1:
        push("/services");
        break;
      case 2: 
        push("/about")
        break;
      case 3:
        push("/contact")
        break;
      default:
        push("/")
    }
  };

  
    return (

      <NavBar square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="HOME" />
          <Tab label="OUR SERVICES"/>
          <Tab label="ABOUT US" />
          <Tab label="CONTACT" />
        </Tabs>
      </NavBar>
    );
   
       
            
            // <NavLink to='/' >Home</NavLink>
            // <NavLink to='/services' >Our Services</NavLink>
            // <NavLink to='/about' >About Us</NavLink>
            // <NavLink to='/contact' >Contact</NavLink>
        
    

}

export default Nav;