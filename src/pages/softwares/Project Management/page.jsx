import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Pmheader from '../../../components/Pmheader';
import Pmcontent from '../../../components/Pmcontent';
import Pmanimation from '../../../components/Pmanimation';
import Pmcontents1 from '../../../components/Pmcontents1';

const Project_Management = () => {
  return (
    <div className="mt-32">
     
      <Pmheader/>
      <Pmcontent/>
      <Pmanimation/>
      <Pmcontents1/>

      <Webregister/>
  <Footer/>
    </div>
  );
};

export default Project_Management;