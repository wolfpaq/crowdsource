import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from '../routing/AppRouting';
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import { useDispatch } from 'react-redux';
import * as projectSlice from '../data/project.slice';

Amplify.configure(awsExports);

function App({ signOut, user }: { signOut: () => void; user: any }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(projectSlice.fetchProjectsAsync());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRouting signOut={signOut} user={user} />
    </BrowserRouter>
  );
}

// export default App;
export default withAuthenticator(App);
