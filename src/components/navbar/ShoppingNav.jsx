import { Button, Dropdown, NavDropdown, NavItem, NavLink } from 'react-bootstrap';
import styles from "./fullnavbar.module.css";
import { UseBrandingCart } from '../../context/BrandingCartContext';
import { UseShoppingCart } from '../../context/ShoppingCartContext';
import { UseLovingCart } from '../../context/LovingCartContext';

const ProfileNav = () =>
{
  const { dropmenu, dropitm } = styles;

  const { openCart, cartQuantity } = UseShoppingCart();
  const { openBrandCart, brandCartQuantity } = UseBrandingCart();
  const { openLoveCart, loveCartQuantity } = UseLovingCart();

  return (
    <>
      <Button
        variant='outline-primary'
        className='rounded mx-2 text-white'>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink} className="text-white">
            <i className="fa-solid fa-cart-shopping"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className={`${dropmenu}`}>
            <Dropdown.Item
              className={`${dropitm} w-100`}
              style={{ position: "relative" }}
              onClick={openCart}>
              سلة المنتجات الدوائية
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  color: "#fff",
                  position: "absolute",
                  bottom: "8px",
                  left: "-18px",
                  width: "1.5rem",
                  height: "1.5rem",
                  transform: "translate(25%, 25%)"
                }}>
                {cartQuantity}
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              className={`${dropitm} w-100`}
              style={{ position: "relative" }}
              onClick={openBrandCart}>
              سلة المنتجات التجميلية
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  color: "#fff",
                  position: "absolute",
                  bottom: "8px",
                  left: "-18px",
                  width: "1.5rem",
                  height: "1.5rem",
                  transform: "translate(25%, 25%)"
                }}>
                {brandCartQuantity}
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              className={`${dropitm} w-100 mb-3`}
              style={{ position: "relative" }}
              onClick={openLoveCart}>
              قائمة المفضلة
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  color: "#fff",
                  position: "absolute",
                  bottom: "8px",
                  left: "-18px",
                  width: "1.5rem",
                  height: "1.5rem",
                  transform: "translate(25%, 25%)"
                }}>
                {loveCartQuantity}
              </div>
            </Dropdown.Item>
            <NavDropdown.Divider />
            <Dropdown.ItemText className="text-center p-0">تمتع بحسابك الطبي</Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>
      </Button>
    </>
  );
};

export default ProfileNav;