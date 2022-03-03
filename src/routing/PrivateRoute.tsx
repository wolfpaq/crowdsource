import { Navigate } from 'react-router-dom';

function PrivateRoute({
  isLoggedIn,
  children,
}: {
  isLoggedIn: boolean;
  children: JSX.Element;
}) {
  return isLoggedIn ? children : <Navigate to="/auth" />;
}

export default PrivateRoute;
