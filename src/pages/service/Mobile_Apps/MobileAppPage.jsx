import Footer from '../../../components/Footer';
import Webregister from '../Website_Development/Components/Webregister';
import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';
import Mobheader from './Components/Mobheader';
import Mobcontent from './Components/Mobcontent';
import Mobanimation from './Components/Mobanimation';
import Mobcontent1 from './Components/Mobcontent1';

const MobileAppPage = () => {
   usePageTitle("Mobile App Development Company in India | Codo Stack");
  return (
    <div className="mt-32">
      <Mobheader/>
      <Resellerpage/>
      <Mobcontent/>
      <Mobanimation/>
      <Mobcontent1/>
      <Webregister/>
      <Footer/>
  
    </div>
  );
};

export default MobileAppPage;