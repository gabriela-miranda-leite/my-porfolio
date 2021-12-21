import type {NextPage} from 'next';

import {Banner} from '../components/sections/banner';
import {Footer} from '../components/sections/footer';
import {Knowledge} from '../components/sections/knowledge';
import {Projects} from '../components/sections/projects';
import {WhoIAm} from '../components/sections/whoIAm';

const Pages: NextPage = () => {
  return (
    <>
      <Banner />
      <WhoIAm />
      <Knowledge />
      <Projects />
      <Footer />
    </>
  );
};

export default Pages;
