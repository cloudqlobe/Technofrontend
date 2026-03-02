import Footer from '../../../components/Footer';
import Webregister from '../../service/Website_Development/Components/Webregister';
import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';
import Crmheader from './Components/Crmheader';
import Crmcontent from './Components/Crmcontent';
import Crmanimation from './Components/Crmanimation';
import Crmcontent1 from './Components/Crmcontent1';

const CRMPage = () => {
   usePageTitle("CRM Software Development Solutions | Codo Stack");
  return (
    <div className="mt-32">
      <Crmheader/>
      <Resellerpage/>
      <Crmcontent/>
      <Crmanimation/>
      <Crmcontent1/>
      <Webregister/>
      <Footer/>
    </div>
  );
};

export default CRMPage;