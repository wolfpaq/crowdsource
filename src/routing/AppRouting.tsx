import { Routes, Route, Navigate } from 'react-router-dom';
import { CognitoUserInterface } from '@aws-amplify/ui-components';
import Home from '../containers/Home';
import Admin from '../containers/Admin';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import { useIsAdminUser } from '../hooks/useIsAdminUser';

const AppRouting = ({
  signOut,
  user,
}: {
  signOut: () => void;
  user: CognitoUserInterface;
}) => {
  const isLoggedIn = true;
  const isAdmin = useIsAdminUser(user);

  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <AdminRoute isAdmin={isAdmin}>
            <Admin signOut={signOut} user={user} />
          </AdminRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Home signOut={signOut} user={user} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRouting;
