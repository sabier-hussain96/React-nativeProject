import { createDrawerNavigator } from '@react-navigation/drawer';
import { header_Shown, screenNames } from '../constatnts/constants';
import Notes from './Notes';
import Feed from './Feed';
import Todo from './ToDoList'
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Drawer.Navigator screenOptions={{unmountInactiveRoutes: true}}>
      <Drawer.Screen name={screenNames.FEED_SCREEN} component={Feed} options={{unmountOnBlur:true}} />
      <Drawer.Screen name={screenNames.TODO_SCREEN} component={Todo} options={{unmountOnBlur:true}} />
      <Drawer.Screen name={screenNames.NOTES} component={Notes} options={{unmountOnBlur:true}} />
    </Drawer.Navigator>

  );
}

export default Home