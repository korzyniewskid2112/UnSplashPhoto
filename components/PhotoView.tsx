import { View, Text, ImageBackground, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import ViewSpace from './ViewSpace';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from './../constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TextCustom from './TextCustom';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from './../navigations/NavigationsType';

interface PhotoViewProps {
    navigation: StackNavigationProp<StackParamList, 'PhotoView'>,
}

const PhotoView = ({ navigation }: PhotoViewProps) => {
    const wdithDevice = Dimensions.get('screen').width;
    const inits = useSafeAreaInsets();
    return (
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View style={{ overflow: 'hidden', borderBottomEndRadius: 40, borderBottomLeftRadius: 40, marginBottom: 15 }}>
                <ImageBackground
                    resizeMode={'cover'}
                    source={{ uri: 'https://images.unsplash.com/photo-1643543232295-061cc8f9069c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80' }}
                    style={{ height: 500, width: wdithDevice, paddingTop: inits.top == 0 ? 10 : inits.top + 10 }}
                >
                    <ViewSpace>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch' }}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primary, marginRight: 10, borderRadius: 10 }}>
                                <Ionicons name="ios-arrow-back-circle" size={26} color={COLORS.gray} />
                            </TouchableOpacity>
                            <TextInput placeholderTextColor={COLORS.gray} placeholder='Search photo' style={{ flex: 6, backgroundColor: COLORS.primary, padding: 10, borderRadius: 10, fontFamily: FONTS.latoLight, fontSize: 16, color: COLORS.dark }} />
                        </View>
                    </ViewSpace>
                </ImageBackground>
            </View>
            <View style={{ marginTop: -100, backgroundColor: COLORS.backgroundLight, marginLeft: 30, marginRight: 30, borderRadius: 10, padding: 20 }}>
                <View style ={{marginBottom: 10}}>
                    <TextCustom size={28} font={FONTS.latoLight} align={'center'}>Nice photo</TextCustom>
                </View>
                <TextCustom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis quasi praesentium, possimus maxime recusandae voluptates. Temporibus mollitia nihil, quia autem quam aliquam nam blanditiis repellendus consequuntur saepe ipsa unde!</TextCustom>
                <TouchableOpacity>
                    <TextCustom>Add to fav</TextCustom>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default PhotoView;