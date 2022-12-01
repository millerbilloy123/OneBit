import {NavigationContainer} from "@react-navigation/native";
import {CreateNativeStackNavigator} from "@react-navigation/native-stack";
import Start  from "../Pages/Start";

const Stack = CreateNativeStackNavigator();

export default function AllPages(){
   return(
        <NavigationContainer>~
            <Stack.Navigator
                screenOptions= {{
                    headerShow:false
                }}
            />


        <Stack.Screen name="Start" component={Start}/>



        </NavigationContainer>
   ) 
}