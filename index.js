/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from './src';
import { goToHome } from 'navigation';
import { registerScreens } from 'screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  goToHome();
});
