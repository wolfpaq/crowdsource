import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { Box } from '@mui/material';
import AdminContent from '../components/AdminContent';
import AppHeader from '../components/AppHeader';

export default function Admin({
  signOut,
  user,
}: {
  signOut: () => void;
  user: CognitoUserInterface;
}) {
  return (
    <Box>
      <AppHeader signOut={signOut} user={user} />
      <AdminContent />
    </Box>
  );
}
