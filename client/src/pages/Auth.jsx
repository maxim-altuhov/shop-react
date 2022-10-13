import { Container, Card, Form, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

import { LOGIN_ROUTE, REG_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="w-50 p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form>
          <Form.Control className="mt-3" placeholder="Введите ваш email..." />
          <Form.Control className="mt-3" placeholder="Введите ваш пароль..." />
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
          <Button variant="outline-success">{isLogin ? 'Войти' : 'Регистрация'}</Button>
        </div>
      </Card>
    </Container>
  );
};

export default Auth;
