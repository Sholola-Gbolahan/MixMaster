import { Link } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <h1>Homelayout</h1>
      <Link to="./about">About page</Link>
      <br />
      {/* An external link still uses the  normal html anchor element*/}
      <a href="https://johnsmilga.com"> Best web Dev Course </a>
    </div>
  );
};

export default HomeLayout;
