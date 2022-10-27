import { Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './components/sections/ShoppingCartContext';

import Footer from './components/footer/Footer';
import MainHome from './components/mainPage/MainHome';
import Features from './components/features/Features';
import NavBar from './components/navbar/NavBar';
import ErrorPage from "./components/error page/ErrorPage";

import MainPhSection from './components/sections/MainPhSection';
import FinalBlog from './components/blog/FinalBlog';
import FinalProducts from './components/products/FinalProducts';
import Brands from './components/brands/Brands';
import Offers from './components/offers/Offers';

import PointsPolicy from './components/polices/PointsPolicy';
import ShippingPolicy from './components/polices/ShippingPolicy';
import UsagePolicy from './components/polices/UsagePolicy';
import PrivacyPolicy from './components/polices/PrivacyPolicy';

import GeneralBlog from './components/blog/general blog/GeneralBlog';
import FirstBlog from './components/blog/blog one/FirstBlog';
import SecondBlog from './components/blog/blog two/SecondBlog';
import ThirdBlog from './components/blog/blog three/ThirdBlog';
import ForthBlog from './components/blog/blog four/ForthBlog';

import SignUp from './components/registrations/SignUp';
import LogIn from './components/registrations/LogIn';
import ForgotPassword from './components/registrations/ForgotPassword';
import UpdateProfile from './components/registrations/UpdateProfile';
import Dashboard from './components/registrations/Dashboard';

const App = () =>
{
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/brands' element={<Brands />} />

        <Route path='/mainphsection' element={<MainPhSection />} />

        <Route path='/blogs' element={<FinalBlog />} >
          <Route path='generalblog' element={<GeneralBlog />} />
          <Route path='firstblog' element={<FirstBlog />} />
          <Route path='secondblog' element={<SecondBlog />} />
          <Route path='thirdblog' element={<ThirdBlog />} />
          <Route path='forthblog' element={<ForthBlog />} />
        </Route>

        <Route path='/products' element={<FinalProducts />} />
        <Route path='/offers' element={<Offers />} />

        <Route path='/pointspolicy' element={<PointsPolicy />} />
        <Route path='/shippingpolicy' element={<ShippingPolicy />} />
        <Route path='/usagepolicy' element={<UsagePolicy />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Features />
      <Footer />
    </ShoppingCartProvider>
  );
};

export default App
