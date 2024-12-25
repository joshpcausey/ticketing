import axios from 'axios';

const Landing = (props) => {
  console.log(props);
  return <h1>Landing Page</h1>;
};

export const getServerSideProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    const { data } = await axios
      .get(
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
        {
          headers: req.headers,
        }
      )
      .catch((err) => {
        console.error(err);
      });

    return { props: data };
  } else {
    const { data } = await axios.get('/api/users/currentuser');
    return { props: data };
  }
};

export default Landing;
