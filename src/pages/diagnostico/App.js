
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const MainNavigator = createStackNavigator({
  Diagnostico: {screen: DiagnosticoScreen},
  Final: {screen: FinalScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
