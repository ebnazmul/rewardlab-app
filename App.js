import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';
import './gesture-handler'
import './global.css'

export default function App() {

  return (
    <>
    <StatusBar style='light' backgroundColor='#3b3b3b'/>
    <Navigation />
    </>
  );
}