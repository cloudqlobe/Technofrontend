import Footer from '../../components/Footer';
import Careerheader from './Components/Careerheader';
import Careercontent from './Components/Careercontent';
import Careeranimation from './Components/Careeranimation';
import Careercontent1 from './Components/Careercontent1';
import Careerregister from './Components/Careerregister';
import Resellerpage from '../../components/Resellerpage';
import usePageTitle from '../../hooks/usePageTitle';

const CareerPage = () => {
  usePageTitle("Careers at Codo Stack | Join Our Tech Team");
  return (
    <div className="mt-32">
      <Careerheader />
      <Resellerpage />
      <Careercontent />
      <Careeranimation />
      <Careercontent1 />
      <Careerregister />
      <Footer />
    </div>
  );
};

export default CareerPage;