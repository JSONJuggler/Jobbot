import {RouteProp} from '@react-navigation/native';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {ApisauceInstance} from 'apisauce';

export type TabParamList = {
  Search: undefined;
  Login: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type SearchScreenRouteProp = RouteProp<TabParamList, 'Search'>;

export type SearchScreenNavigationProp = MaterialBottomTabNavigationProp<
  TabParamList,
  'Search'
>;

export type SearchScreenProps = {
  route: SearchScreenRouteProp;
  navigation: SearchScreenNavigationProp;
};

export type LoginScreenRouteProp = RouteProp<TabParamList, 'Login'>;

export type LoginScreenNavigationProp = MaterialBottomTabNavigationProp<
  TabParamList,
  'Login'
>;

export type LoginScreenProps = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

export type ProfileScreenRouteProp = RouteProp<TabParamList, 'Profile'>;

export type ProfileScreenNavigationProp = MaterialBottomTabNavigationProp<
  TabParamList,
  'Profile'
>;

export type ProfileScreenProps = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export type State = {
  readonly pages: any;
  readonly api: ApisauceInstance;
};
