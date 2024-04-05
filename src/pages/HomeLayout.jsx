import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
Navbar
const HomeLayout = () => {

  // useNavigation Give us info about the State
  const navigation = useNavigation()

  console.log(navigation)

  const isPageLoading = navigation.state === 'loading';
  // Creating a variable for global context
 const value = "Some values"
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? ( <div className="loading" />) 
        : 
        // Accessing global context in all our pages by using Context props
         ( <Outlet context = {{value}} /> ) }
 
      </section>
      

    </div>
  );
};

export default HomeLayout;
