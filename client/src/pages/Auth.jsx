import { useState, useContext } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { registration, login } from '../http/userAPI';

import { Context } from '../index';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkAuth = async () => {
    try {
      let userData;

      if (isLogin) {
        userData = await login(email, password);
      } else {
        userData = await registration(email, password);
      }

      user.setUser(userData);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="w-50 p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form>
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </Form>
        <div className="d-flex justify-content-between align-items-center mt-3">
          {isLogin ? (
            <div>
              Нет аккаунта?
              <NavLink className="text-dark fw-bold ms-1" to={REG_ROUTE}>
                Зарегистрируйся
              </NavLink>
            </div>
          ) : (
            <div>
              Есть аккаунт?
              <NavLink className="text-dark fw-bold ms-1" to={LOGIN_ROUTE}>
                Войдите!
              </NavLink>
            </div>
          )}
          <Button variant="outline-success" onClick={checkAuth}>
            {isLogin ? 'Войти' : 'Регистрация'}
          </Button>
        </div>
      </Card>
    </Container>
  );
});

export default Auth;
