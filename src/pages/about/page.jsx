import React from 'react';
import Footer from '../../components/Footer';
import Webregister from '../../components/Webregister';
import Aboutcontent1 from '../../components/Aboutcontent1';
import Aboutheader from '../../components/Aboutheader';
import Aboutcontent from '../../components/Aboutcontent';
import Aboutanimation from '../../components/Aboutanimation';
import Aboutvision from '../../components/Aboutvision';

const AboutPage = () => {
  return (
    <div className="mt-32">
      
      <Aboutheader/>
      <Aboutcontent/>
      <Aboutanimation/>
   
      <Aboutcontent1/> 
      <Aboutvision/>
      <Webregister/>
   <Footer/>
    </div>
  );
};

export default AboutPage;