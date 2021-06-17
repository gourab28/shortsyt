import React, {Fragment} from 'react';
//mportt Container from '@material-ui/core/Container';
//mportt Promo from '../components/adpromo';
import Downloader from '../components/downloader';
import Intro from './intro';

export default function Home (props) {
  return (
    <Fragment>
      <Downloader />
      <Intro />
    </Fragment>
    )
}