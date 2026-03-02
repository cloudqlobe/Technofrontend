import Footer from "../../components/Footer";
import Resellerpage from "../../components/Resellerpage";
import Webregister from "../service/Website_Development/Components/Webregister";
import usePageTitle from "../../hooks/usePageTitle";
import Aboutanimation from "./Components/Aboutanimation";
import Aboutcontent from "./Components/Aboutcontent";
import Aboutcontent1 from "./Components/Aboutcontent1";
import Aboutheader from "./Components/Aboutheader";

const AboutPage = () => {
  usePageTitle("About Us | Codo Stack");
  return (
    <div>
      <Aboutheader />
      <Resellerpage />
      <Aboutcontent />
      <Aboutanimation />
      <Aboutcontent1 />
      <Webregister />
      <Footer />
    </div>
  );
};

export default AboutPage;