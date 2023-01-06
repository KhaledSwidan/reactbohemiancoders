import {
  Button,
  ButtonGroup,
  Dropdown,
  NavDropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { UseShoppingCart } from "../../context/ShoppingCartContext";
import styles from "./fullnavbar.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { getAuth } from "firebase/auth";

const ProfileNav = () => {
  const { dropmenu, dropitm, profSet } = styles;

  const { currentUser } = getAuth();
  const { openCart, cartQuantity } = UseShoppingCart();
  const handleSignOut = () => auth.signOut();

  return (
    <>
      <ButtonGroup
        variant="outline-primary"
        className={`${profSet} rounded mx-2 p-1 border border-primary text-white`}>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink} className="text-white">
            <i className="fa-solid fa-gear"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className={`${dropmenu}`}>
            <Dropdown.Item
              as={Link}
              to={!currentUser && "/login"}
              className={`${dropitm}`}>
              <div
                className="d-flex flex-column align-items-start"
                onClick={handleSignOut}>
                <p className="mb-0">
                  مرحبا بك.. {currentUser ? `${currentUser.email}` : "أنت زائر"}
                </p>
                <p className="mb-0">
                  <i className="fa-solid fa-clipboard-check me-2"></i>
                  {currentUser ? "تسجيل خروج" : "تسجيل دخول"}
                </p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              as={Button}
              className={`${dropitm} rounded`}
              variant="outline-primary"
              style={{ position: "relative" }}
              onClick={openCart}>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-cart-shopping me-2"></i>
                  <p className="mb-0">المشتريات</p>
                </div>
                <span
                  className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    color: "#fff",
                    width: "1.5rem",
                    height: "1.5rem",
                  }}>
                  {cartQuantity}
                </span>
              </div>
            </Dropdown.Item>
            <NavDropdown.Divider />
            <Dropdown.ItemText className="text-center p-0">
              تمتع بحسابك الطبي
            </Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default ProfileNav;
