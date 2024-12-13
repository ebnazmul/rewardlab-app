import { View, Text, Image } from 'react-native'
import InviteFriend from '../components/InviteFriend';

const Home = () => {

    return (
        <View className='m-4 gap-4'>
            <View className="w-full">
                <Image className="w-full" resizeMode='contain' source={require('./../assets/images/earn-with-offerwalls.png')} />
            </View>
            {/* <Text>This is HOME!</Text> */}
            <InviteFriend />
        </View>
    )
}

export default Home;