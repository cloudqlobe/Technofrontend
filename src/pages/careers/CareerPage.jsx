import Footer from '../../components/Footer';
import Careerheader from '../../components/Careerheader';
import Careercontent from '../../components/Careercontent';
import Careeranimation from '../../components/Careeranimation';
import Careercontent1 from '../../components/Careercontent1';
import Careerregister from '../../components/Careerregister';
import Resellerpage from '../../components/Resellerpage';
import { Helmet } from 'react-helmet';

const CareerPage = () => {
  return (
    <div className="mt-32">
            <Helmet>
              <title>Careers at Codo Stack | Join Our Tech Team</title>
            </Helmet>
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