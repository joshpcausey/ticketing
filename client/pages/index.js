import buildClient from '../api/build-client';

const Landing = (props) => {
  console.log(props);
  return <h1>Landing Page</h1>;
};

export const getServerSideProps = async (context) => {
  const { data } = await buildClient(context).get('/api/users/currentuser');
  return { props: data };
};

export default Landing;
