import { AppRegistry } from 'react-native';
import App from './App';

export const registerApp = appName => AppRegistry.registerComponent(appName, () => App);