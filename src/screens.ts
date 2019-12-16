import { Navigation } from 'react-native-navigation';

export function registerScreens(): void {
  Navigation.registerComponent('Home', () => require('./index').default);
}
