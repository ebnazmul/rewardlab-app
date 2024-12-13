import { View, Text, ScrollView } from "react-native";
import Input from "../components/Input/Input";
import IconButton from "../components/Buttons/IconButton";

const Topup = () => {
    return (
        <ScrollView className="bg-white p-4 m-4 gap-4">
            <View>
            <Input name="Phone number or email"/>
            <Text className="mt-2">{`* Please include the country code in your phone number (e.g., +60 for Malaysia).`}</Text>
            
            </View>
            <View>
            <Input name="Amount"/>
            <Text className="mt-2">{`* Each 1000 points is equivalent to $1 in your local currency.`}</Text>
            </View>
            <View>
            <Input name="Note"/>
            <Text className="mt-2">{`* Insert a note: We will check before proceeding with the payment.`}</Text>
            </View>

            <View className="mt-4 mb-8">
            <IconButton icon="gift-sharp" fullWidth={true}>Submit Cashout</IconButton>
            </View>

        </ScrollView>
    );
}

export default Topup;