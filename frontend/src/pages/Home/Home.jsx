import React from 'react';
import styles from './Home.module.css';
import {Link,useHistory} from 'react-router-dom';
import Card from '../../components/shared/card/Card';
import Button from '../../components/shared/Button/Button';




const Home = () => {

  const signInLink = {
    color: '#0077ff',
    fontWeight:'bold',
    textDecoration:'none',
    marginLeft:'10px',
  
  };
  const history=useHistory();
  function startRegistration()
  {
    history.push('/register')
  }
  return(
    <div className={styles.cardWrapper}>

      <Card title="Welcome to eAdda!!!" icon="logo">

        <p className={styles.text}>
      We are working to get eAdda ready for engineers! while 
      we wrapup the finishing youches, we are adding people 
      gradually to make sure nothing breaks
        </p>
    <div>
      <Button onClick={startRegistration} text="Get your username"/>

      
    </div>
    
    <div className={styles.signinWrap}>
      <span className={styles.hasInvite}>Have an invite text?</span>
      <Link style={signInLink} to="/login">Sign in</Link>
    </div>

  
  
</Card>
</div>
  )
};
      
       
    
  
   


export default Home;
