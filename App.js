import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';
import './gesture-handler'
import './global.css'
import Colors from './configs/Colors';

export default function App() {

  return (
    <>
    <StatusBar style='light' backgroundColor={Colors.accent}/>
    <Navigation />
    </>
  );
}