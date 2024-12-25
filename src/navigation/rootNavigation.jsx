import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CHARECTERDETAIL, SEARCHSCREEN, TAB } from '../utils/routes';
import CharecterDetail from '../screens/charecterDetail';
import TabNavigation from './tabNavigation';
import { Arrow, ArrowCircleDown, ArrowLeft } from 'iconsax-react-native';
import SearchScreen from '../screens/searchScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen 
       options={{
        headerShown: false,
       
       }}
       name={TAB} component={TabNavigation} />

      
<Stack.Screen
  options={({ navigation }) => ({
    headerStyle: { backgroundColor: "#374259" },
    headerTitleStyle: { color: "white" },
    headerTitle: "Character Details",
    headerBackTitleVisible: false, 
    headerLeft: () => (
      <ArrowLeft
        size={30} 
        color="white" 
        style={{ marginLeft: 0 }} 
        onPress={() => navigation.goBack()} 
      />
    ),
  })}
  name={CHARECTERDETAIL} 
  component={CharecterDetail} 
/>
<Stack.Screen
  options={({ navigation }) => ({
    headerStyle: { backgroundColor: "#545B77" },
    headerTitleStyle: { color: "white" },
    headerTitle: "Search",
    headerBackTitleVisible: false, 
    headerLeft: () => (
      <ArrowLeft
        size={30} 
        color="white" 
        style={{ marginLeft: 0 }} 
        onPress={() => navigation.goBack()} 
      />
    ),
  })}
  name={SEARCHSCREEN} 
  component={SearchScreen} 
/>

      
    </Stack.Navigator>
  )
}

export default RootNavigation