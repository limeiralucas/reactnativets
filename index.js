/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { goToHome } from 'navigation';
import { registerScreens } from 'screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  goToHome();
});
