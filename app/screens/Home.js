import { createDrawerNavigator } from '@react-navigation/drawer';
import { header_Shown, screenNames } from '../constatnts/constants';
import Notes from './Notes';
import Feed from './Feed';
import Todo from './ToDoList'
import CustomDrawer from './CustomDrawer';
import NotesIcon from '../../assets/icons/NotesIcon';
import TodoIcon from '../../assets/icons/TodoIcon';
import FeedIcon from '../../assets/icons/FeedIcon';
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Drawer.Navigator screenOptions={{ unmountInactiveRoutes: true }} drawerContent={props => <CustomDrawer {...props} />} >
      <Drawer.Screen name={screenNames.FEED_SCREEN} component={Feed} options={{ unmountOnBlur: true, drawerIcon: ({}) => (
        <FeedIcon  stroke={"#000000"}/>
   ) }}  />
      <Drawer.Screen name={screenNames.TODO_SCREEN} component={Todo} options={{ unmountOnBlur: true, drawerIcon: ({colour}) => (
        
        <TodoIcon stroke={"#000000"}/>
   ) }} />
      <Drawer.Screen name={screenNames.NOTES} component={Notes} options={{ unmountOnBlur: true , drawerIcon: ({}) => (
        <NotesIcon  stroke={"#000000"}/>
  )}}/>
    </Drawer.Navigator>

  );
}

export default Home