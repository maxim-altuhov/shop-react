import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(LOGIN_ROUTE);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="text-light fw-bold text-decoration-none" to={SHOP_ROUTE}>
          React Shop
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}>
              Админ панель
            </Button>
            <Button variant="outline-light" className="ms-2" onClick={() => logOut()}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
