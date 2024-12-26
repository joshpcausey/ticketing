import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';

const _app = ({ Component, pageProps }) => {
  return (
    <div>
      <Header currentUser={pageProps.currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

export default _app;
