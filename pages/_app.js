import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import initStore from '../components/redux/store/store';
import {createWrapper} from 'next-redux-wrapper';
import store from '../components/redux/store/store';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../css/styles.css';
import '../css/background.scss';

class myApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return(
      <>
      <Head>
        <title>AeroContest</title>
      </Head>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
      </>
    )
}
}

const makestore = ()=>store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(myApp);