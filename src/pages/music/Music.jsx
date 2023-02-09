import Sounds from './Sounds'
import Cards from './Cards'
import Footer from '../Footer';
import Navbar from '../Navbar'


const Music = () => {
   
    return (
      <>
      <Navbar />
      <div className="h-screen bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <div className=" bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <Sounds  />
      <Cards />
      <Footer />
  </div>
    </div>
    </>
    );
   
}

export default Music;
