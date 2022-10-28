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
            <Dropdown.Item as={Link} to="login" className={`${dropitm}`}>
              Log In
              <i className="fa-solid fa-clipboard-check"></i>
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