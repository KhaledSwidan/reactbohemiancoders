import { Button, Dropdown, NavDropdown, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "./fullnavbar.module.css";

const ProfileNav = () =>
{
  const { dropmenu, dropitm } = styles;
  return (
    <>
      <Button
        variant='outline-primary'
        className='rounded mx-2 text-white'>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink} className="text-white"><i className="fa-solid fa-gear"></i></Dropdown.Toggle>
          <Dropdown.Menu className={`${dropmenu}`}>
            <Dropdown.Item as={Link} to="wishlist" className={`${dropitm}`}>
              قائمة المفضلة
              <i className="fa-solid fa-clipboard-check"></i>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="signup" className={`${dropitm}`}>
              Sign Up
              <i className="fa-solid fa-clipboard-check"></i>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="login" className={`${dropitm}`}>
              Log In
              <i className="fa-solid fa-clipboard-check"></i>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="forgot-password" className={`${dropitm}`}>
              Forgot Password
              <i className="fa-solid fa-clipboard-check"></i>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="update-profile" className={`${dropitm}`}>
              Update Profile
              <i className="fa-solid fa-clipboard-check"></i>
            </Dropdown.Item>
            <NavDropdown.Divider />
            <Dropdown.ItemText className="text-center">تمتع بحسابك الطبي</Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>
      </Button>
    </>
  );
};

export default ProfileNav;