import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="text-light fw-bold text-decoration-none" to={SHOP_ROUTE}>
          React Shop
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant="outline-light">Админ панель</Button>
            <Button variant="outline-light" className="ms-2">
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button variant="outline-light">Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
