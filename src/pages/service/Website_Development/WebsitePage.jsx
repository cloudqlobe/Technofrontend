import Footer from '../../../components/Footer';
import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';
import Webanimation from './Components/Webanimation';
import Webcontents from './Components/Webcontents';
import Webcontent2 from './Components/Webcontnet2';
import Webheader from './Components/Webheader';
import Webregister from './Components/Webregister';

const WebsitePage = () => {
  usePageTitle("Web Development Company in India | Codo Stack");
  return (
    <div className="mt-32">
      <Webheader />
      <Resellerpage />
      <Webcontents />
      <Webanimation />
      <Webcontent2 />
      <Webregister />
      <Footer />
    </div>
  );
};

export default WebsitePage;
