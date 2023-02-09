import Testimonials from "./Testimonials";
import Hero from "./Hero";
import Social from "../Social";



const Heropage = () => {
  return (
    <div className=" bg-black">
        <Hero />
        <div className="hidden lg:block">
        <Social />
        </div>
        <Testimonials />  
    </div>
  );
}

export default Heropage;
