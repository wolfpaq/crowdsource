// import React from 'react';
// import {
//   Navigate,
//   Route,
//   RouteProps,
// } from 'react-router-dom';

// export interface AdminRouteProps extends RouteProps {
//   component: React.ComponentType<any>;
//   isLoggedIn: boolean;
// }

// const AdminRoute = (props: AdminRouteProps) => {
//   const { component: Component, isLoggedIn, ...rest } = props;
//   console.log('AdminROUTE', isLoggedIn);

//   return (
//     <Route
//       {...rest}
//       element={() =>
//         !isLoggedIn ? (
//           <Navigate
//             to={{ pathname: '/auth' }}
//           />
//         ) : (
//           <Component {...rest} />
//         )
//       }
//     />
//   );
// };

// export default AdminRoute;
import { Navigate } from 'react-router-dom';

function AdminRoute({
  isAdmin,
  children,
}: {
  isAdmin: boolean;
  children: JSX.Element;
}) {
  return isAdmin ? children : <Navigate to="/" />;
}
// export interface AdminRouteProps extends RouteProps {
//   component:
//     // | React.ComponentType<RouteComponentProps<any>>
//     | React.ComponentType<any>;
//   isLoggedIn: boolean;
// }

// const AdminRoute = (props: any) => {
//   const { component: Component, isLoggedIn, ...rest } = props;
//   console.log('AUTHROUTE', isLoggedIn);

//   return (
//     // <Route
//     //   {...rest}
//     //   render={(renderProps) =>
//     //     isLoggedIn ? (
//     //       <Redirect
//     //         to={{ pathname: '/admin', state: { from: renderProps.location } }}
//     //       />
//     //     ) : (
//     //       <Component {...renderProps} />
//     //     )
//     //   }
//     // />
//     null
//   );
// };

export default AdminRoute;
