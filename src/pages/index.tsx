import type {NextPage} from 'next';
import {Portfolio} from '../components/section/portfolio';
import {WhoIAm} from '../components/section/whoIAm';

const Pages: NextPage = () => {
  return (
    <>
      <Portfolio />
      <WhoIAm />
    </>
  );
};

export default Pages;
