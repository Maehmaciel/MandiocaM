import Diagnostico from './pages/diagnostico'
import Crescimento from   './pages/crescimento'
import Calagem from './pages/Calculadora'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Final from './pages/diagnostico/final'

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = MaterialCommunityIcons;
  let iconName;
  if (routeName === 'Diagnostico') {
    iconName = `test-tube`;
  } else if (routeName === 'Crescimento') {
    iconName = `leaf`;
  }else if (routeName === 'Calagem') {
    iconName = `calculator`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Crescimento,
      Diagnostico,
      Calagem,
      Final
      
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) =>
          getTabBarIcon(navigation, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      },
    }
  )
);
