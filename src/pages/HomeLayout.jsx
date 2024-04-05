import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav> Header</nav>
      {/* The Outlet componenet is used to display all children pages  */}
      <Outlet />

      <footer>Footer</footer>
      
    </div>
  );
};

export default HomeLayout;
