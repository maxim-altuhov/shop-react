import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import Shop from '../pages/Shop';
import { Context } from '../index';

const AppRouter = () => {
  const { user } = useContext(Context);

  console.log(user);

  return (
    <Routes>
      {user.isAuth &&
        privateRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="/*" element={<Shop />} />
    </Routes>
  );
};

export default AppRouter;
