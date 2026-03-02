import React from 'react';
import Footer from '../../components/Footer';
import Webregister from '../service/Website_Development/Components/Webregister';
import Workheader from './Components/Workheader';
import Workcontent from './Components/Workcontent';
import Workanimation from './Components/Workanimation';
import Workcontent1 from './Components/Workcontent1';
import Resellerpage from '../../components/Resellerpage';
import usePageTitle from '../../hooks/usePageTitle';

const WorksPage = () => {
    usePageTitle("Our Works | Codo Stack");
  return (
    <div className="mt-32">
      <Workheader/>
      <Resellerpage/>
      <Workcontent/>
      <Workanimation/>
      <Workcontent1/>
      <Webregister/>
      <Footer/>
    </div>
  );
};

export default WorksPage;