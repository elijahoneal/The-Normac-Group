
import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router';


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
    <nav>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="HOME" />
          <Tab label="OUR SERVICES"/>
          <Tab label="ABOUT US" />
          <Tab label="CONTACT" />
        </Tabs>
      </Paper>
      </nav>
    );
   
       
            
            // <NavLink to='/' >Home</NavLink>
            // <NavLink to='/services' >Our Services</NavLink>
            // <NavLink to='/about' >About Us</NavLink>
            // <NavLink to='/contact' >Contact</NavLink>
        
    

}

export default Nav;