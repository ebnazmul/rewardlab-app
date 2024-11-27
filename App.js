import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';
import './gesture-handler'
import './global.css'
import Colors from './configs/Colors';
import Initial from './screens/Initial';
import InitialNavigation from './navigation/InitialNavigation';

export default function App() {

  const user = 0;

  return (
    <>
      <StatusBar style='light' backgroundColor={Colors.accent} />
      {
        user ? <Navigation /> : <InitialNavigation />
      }
    </>
  );
}