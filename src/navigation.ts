import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Navigation } from 'react-native-navigation';

export const goToHome = (): void => {
  Promise.all([MaterialIcons.getImageSource('home', 25)]).then(([homeIcon]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            bottomTabs: {
              titleDisplayMode: 'alwaysHide',
            },
          },
          id: 'BottomTabsId',
          children: [
            {
              component: {
                name: 'Home',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    icon: homeIcon,
                    showLabel: 'false',
                    selectedIconColor: 'blue',
                  },
                },
              },
            },
            {
              component: {
                name: 'Home',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    icon: homeIcon,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
};
