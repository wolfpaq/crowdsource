import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { Box } from '@mui/material';
import HomeContent from '../components/HomeContent';
import AppHeader from '../components/AppHeader';

export default function Home({
  signOut,
  user,
}: {
  signOut: () => void;
  user: CognitoUserInterface;
}) {
  return (
    <Box>
      <AppHeader signOut={signOut} user={user} />
      <HomeContent />
    </Box>
  );
}
