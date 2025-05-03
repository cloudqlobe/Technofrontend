import React from 'react';
import Footer from '../../components/Footer';
import Webregister from '../../components/Webregister';
import Careerheader from '../../components/Careerheader';
import Careercontent from '../../components/Careercontent';
import Careeranimation from '../../components/Careeranimation';
import Careercontent1 from '../../components/Careercontent1';
import Careerregister from '../../components/Careerregister';

const CareerPage = () => {
  return (
    <div className="mt-32">
      <Careerheader/>
      <Careercontent/>
      <Careeranimation/>
      <Careercontent1/>
      <Careerregister/>
  
     
<Footer/>
    </div>
  );
};

export default CareerPage;