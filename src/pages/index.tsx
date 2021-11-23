import type {NextPage} from 'next';
import {Footer} from '../components/section/Footer';
import {Portfolio} from '../components/section/portfolio';
import {WhoIAm} from '../components/section/whoIAm';

const Pages: NextPage = () => {
  return (
    <>
      <Portfolio />
      <WhoIAm />
      <Footer />
    </>
  );
};

export default Pages;
