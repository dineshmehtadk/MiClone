
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { PreNavbar } from './components/PreNavbar/PreNavbar';
import Slider from './components/Slider';
import data from "./components/data/data.json"
import Offers from './components/Offers/Offers';
import Heading from './components/Heading/Heading';
import StarProduct from './components/StarProduct/StarProduct';
import AccessoriesMenu from './components/AccessoriesMenu/AccessoriesMenu';
import HotAccessories from './components/HotAccessories/HotAccessories.js';
import ProductReviews from './components/ProductReviews/ProductReviews';
import Videos from './components/Videos/Videos';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import NavOptions from './components/NavOptions/NavOptions';

function App() {
  
  return (
   <BrowserRouter>
     <PreNavbar />
     <Navbar />
     <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home} accessories={data.accessories} audio={data.audio} tv={data.tv}
      />
     <Slider start={data.banner.start} />
     <Offers offers={data.offer} />
     <Heading text="PRODUCTS" />
     <StarProduct starProduct={data.starProduct} />
     <Heading text="HOT ACCESSORIES" />
     <AccessoriesMenu />
     
    <Routes>

        <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} >  
        </Route>     

        <Route path="/smartdevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>} >
          </Route> 

          <Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>} >
          </Route>   
          <Route path="/lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>} >
          </Route>   
          <Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>} >
          </Route>
       
    
    </Routes>
    <Heading text="PRODUCT REVIEWS" />
    <ProductReviews productReviews={data.productReviews} />

    <Heading text="VIDEOS" />
    <Videos videos={data.videos} />
    <Heading text="IN THE PRESS" />
    <Banner banner={data.banner.end} />
    <Footer footer={data.footer} />

  </BrowserRouter>

  );
}

export default App;
