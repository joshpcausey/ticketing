import buildClient from '../api/build-client';

const Landing = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

export const getServerSideProps = async (context) => {
  const { data } = await buildClient(context).get('/api/users/currentuser');
  return { props: data };
};

export default Landing;
