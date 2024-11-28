import { StatusBar } from 'expo-status-bar';
import './gesture-handler'
import './global.css'
import Colors from './configs/Colors';
import ContextProvider from './context/ContextProvider';
import AuthStateHandler from './handlers/AuthStateHandler';

export default function App() {

  return (
    <ContextProvider>
      <StatusBar style='light' backgroundColor={Colors.accent} />
      <AuthStateHandler />
    </ContextProvider>
  );
}