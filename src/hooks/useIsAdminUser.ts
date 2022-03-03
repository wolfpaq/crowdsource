import { CognitoUserInterface } from '@aws-amplify/ui-components';

export const useIsAdminUser = (user: CognitoUserInterface): boolean => {
  const groups =
    user?.signInUserSession?.idToken?.payload['cognito:groups'] || [];
  return groups.includes('Administrators');
};
