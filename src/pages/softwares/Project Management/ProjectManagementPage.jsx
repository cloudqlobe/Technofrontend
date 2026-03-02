import Footer from "../../../components/Footer";
import Resellerpage from "../../../components/Resellerpage";
import usePageTitle from "../../../hooks/usePageTitle";
import Webregister from "../../service/Website_Development/Components/Webregister";
import Pmanimation from "./Components/Pmanimation";
import Pmcontents from "./Components/Pmcontent";
import Pmcontents1 from "./Components/Pmcontents1";
import PmHeader from "./Components/Pmheader";


const ProjectManagementPage = () => {
  usePageTitle("Project Management Software Solutions | Codo Stack");
  return (
    <div className="mt-32">
      <PmHeader />
      <Resellerpage />
      <Pmcontents />
      <Pmanimation />
      <Pmcontents1 />
      <Webregister />
      <Footer />
    </div>
  );
};

export default ProjectManagementPage;