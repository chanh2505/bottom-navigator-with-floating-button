import { NavigationContainer } from "@react-navigation/native";
import CustomNavigator from "./components/CustomNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <CustomNavigator></CustomNavigator>
    </NavigationContainer>
  );
}
