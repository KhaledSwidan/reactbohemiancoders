import { Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import ErrorPage from "./components/error page/ErrorPage";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import MainHome from "./components/mainPage/MainHome";
import NavBar from "./components/navbar/NavBar";

import FinalBlog from "./components/blog/FinalBlog";
import Brands from "./components/brands/Brands";
import Offers from "./components/offers/Offers";
import FinalProducts from "./components/products/FinalProducts";
import MainPhSection from "./components/sections/MainPhSection";

import PointsPolicy from "./components/polices/PointsPolicy";
import PrivacyPolicy from "./components/polices/PrivacyPolicy";
import ShippingPolicy from "./components/polices/ShippingPolicy";
import UsagePolicy from "./components/polices/UsagePolicy";

import ForthBlog from "./components/blog/blog four/ForthBlog";
import FirstBlog from "./components/blog/blog one/FirstBlog";
import ThirdBlog from "./components/blog/blog three/ThirdBlog";
import SecondBlog from "./components/blog/blog two/SecondBlog";
import GeneralBlog from "./components/blog/general blog/GeneralBlog";

import Dashboard from "./components/profile/Dashboard";
import ForgotPassword from "./components/profile/ForgotPassword";
import LogIn from "./components/profile/LogIn";
import SignUp from "./components/profile/SignUp";
import UpdateProfile from "./components/profile/UpdateProfile";
import WishList from "./components/profile/WishList";

import ContractRosheta from "./components/rosheta/rosheta contract/ContractRosheta";
import NormalRosheta from "./components/rosheta/rosheta normal/NormalRosheta";
import NoRosheta from "./components/rosheta/rosheta not exist/NoRosheta";

import { AuthProvider } from "./context/AuthContext";
import { BrandingCartProvider } from "./context/BrandingCartContext";
import { RequireAuth } from "./context/RequireAuth";

const App = () => {
  return (
    <BrandingCartProvider>
      <ShoppingCartProvider>
        <NavBar />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/brands" element={<Brands />} />

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

            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
        <Features />
        <Footer />
      </ShoppingCartProvider>
    </BrandingCartProvider>
  );
};
export default App;
