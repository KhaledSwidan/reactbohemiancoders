import { Route, Routes } from "react-router-dom";
// import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import ErrorPage from "./components/error page/ErrorPage";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import MainHome from "./components/mainPage/MainHome";
import NavBar from "./components/navbar/NavBar";

import FinalBlog from "./components/blog/FinalBlog";
import Offers from "./components/offers/Offers";
import FinalProducts from "./components/products/FinalProducts";
// import MainPhSection from "./components/sections/MainPhSection";

import PointsPolicy from "./components/polices/PointsPolicy";
import PrivacyPolicy from "./components/polices/PrivacyPolicy";
import ShippingPolicy from "./components/polices/ShippingPolicy";
import UsagePolicy from "./components/polices/UsagePolicy";

import ForthBlog from "./components/blog/blog four/ForthBlog";
import FirstBlog from "./components/blog/blog one/FirstBlog";
import ThirdBlog from "./components/blog/blog three/ThirdBlog";
import SecondBlog from "./components/blog/blog two/SecondBlog";
import GeneralBlog from "./components/blog/general blog/GeneralBlog";

import ContractRosheta from "./components/rosheta/rosheta contract/ContractRosheta";
import NormalRosheta from "./components/rosheta/rosheta normal/NormalRosheta";
import NoRosheta from "./components/rosheta/rosheta not exist/NoRosheta";

import Dashboard from "./components/profile/Dashboard";
import Login from "./components/profile/LogIn";
import WishList from "./components/profile/WishList";
import MainPhSection from "./components/sections/MainPhSection";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainHome />} />

          <Route path="/mainphsection" element={<MainPhSection />} />

          <Route path="/blogs" element={<FinalBlog />}>
            <Route path="generalblog" element={<GeneralBlog />} />
            <Route path="firstblog" element={<FirstBlog />} />
            <Route path="secondblog" element={<SecondBlog />} />
            <Route path="thirdblog" element={<ThirdBlog />} />
            <Route path="forthblog" element={<ForthBlog />} />
          </Route>

          <Route path="/normalrosheta" element={<NormalRosheta />} />
          <Route path="/contractrosheta" element={<ContractRosheta />} />
          <Route path="/norosheta" element={<NoRosheta />} />

          <Route path="/products" element={<FinalProducts />} />
          <Route path="/offers" element={<Offers />} />

          <Route path="/pointspolicy" element={<PointsPolicy />} />
          <Route path="/shippingpolicy" element={<ShippingPolicy />} />
          <Route path="/usagepolicy" element={<UsagePolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Features />
        <Footer />
      </ShoppingCartProvider>
    </>
  );
};
export default App;
