import { createDrawerNavigator } from '@react-navigation/drawer';
import { header_Shown, screenNames } from '../constatnts/constants';
import Notes from './Notes';
import Feed from './Feed';
import Todo from './ToDoList'
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={screenNames.FEED_SCREEN} component={Feed} />
      <Drawer.Screen name={screenNames.TODO_SCREEN} component={Todo} />
      <Drawer.Screen name={screenNames.NOTES} component={Notes}/>  
    </Drawer.Navigator>

  );
}

export default Home