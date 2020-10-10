import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ApisauceInstance } from "apisauce";

export type StackParamList = {
  Home: undefined;
  Login: undefined;
  Settings: undefined;
};

export type HomeScreenRouteProp = RouteProp<StackParamList, "Home">;

export type HomeScreenNavigationProp = StackNavigationProp<StackParamList, "Home">;

export type HomeScreenProps = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

export type LoginScreenRouteProp = RouteProp<StackParamList, "Home">;

export type LoginScreenNavigationProp = StackNavigationProp<StackParamList, "Home">;

export type LoginScreenProps = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

export type State = {
  readonly pages: any
  readonly api: ApisauceInstance
};