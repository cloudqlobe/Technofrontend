import React from 'react';
import Footer from '../../components/Footer';
import Webregister from '../../components/Webregister';
import Workheader from '../../components/Workheader';
import Workcontent from '../../components/Workcontent';
import Workanimation from '../../components/Workanimation';
import Workcontent1 from '../../components/Workcontent1';

const WorksPage = () => {
  return (
    <div className="mt-32">
      <Workheader/>
      <Workcontent/>
      <Workanimation/>
      <Workcontent1/>
      <Webregister/>
      <Footer/>
      
    </div>
  );
};

export default WorksPage;