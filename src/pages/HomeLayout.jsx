import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
Navbar
const HomeLayout = () => {

  // useNavigation Give us info about the State of the fetched Data
  const navigation = useNavigation()
  console.log(navigation)

  // This store the loading state from the useNavigation
  const isPageLoading = navigation.state === 'loading';

  // Creating a variable for global context
 const value = "Some values"

  return (
    <div>
      <Navbar />
      <section className="page">
        {/* This display a Spinner if the is loading codition is true until it's idle */}
        {isPageLoading ? ( <div className="loading" />) 
        : 
        // Accessing global context in all our pages by using Context props
         ( <Outlet context = {{value}} /> ) }
 
      </section>
      

    </div>
  );
};

export default HomeLayout;
