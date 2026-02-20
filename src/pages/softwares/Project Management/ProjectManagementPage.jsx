import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Pmheader from '../../../components/Pmheader';
import Pmcontent from '../../../components/Pmcontent';
import Pmanimation from '../../../components/Pmanimation';
import Pmcontents1 from '../../../components/Pmcontents1';
import Resellerpage from '../../../components/Resellerpage';
import { Helmet } from 'react-helmet';

const ProjectManagementPage = () => {
  return (
    <div className="mt-32">
     <Helmet>
  <title>Project Management Software Solutions | Codo Stack</title>
</Helmet>
      <Pmheader/>
      <Resellerpage/>
      <Pmcontent/>
      <Pmanimation/>
      <Pmcontents1/>

      <Webregister/>
  <Footer/>
    </div>
  );
};

export default ProjectManagementPage;