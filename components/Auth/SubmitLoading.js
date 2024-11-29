import {View} from 'react-native';

// At the time rn asking to render the animation in first state, thats why im intregating the animation in another component.

const SubmitLoading = () => {
    return (
        <View className="bg-gray-900 py-3 rounded-xl items-center">
            <View className="size-7 border-x-2 border-t-2 border-sky-500 rounded-full animate-spin"/>
        </View>
    );
}

export default SubmitLoading;