import { ScrollView, Text, TextInput, View, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '../constants/theme';
import TextCustom from './TextCustom';
import ViewSpace from './ViewSpace';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import {StackParamList} from './../navigations/NavigationsType';


interface SearchProps  {
    navigation: StackNavigationProp<StackParamList, 'Search'>;
}

const Search = ({navigation} : SearchProps) => {
    const inits = useSafeAreaInsets();
    const deviceWidth = Dimensions.get('screen').width;
    return (
        <ScrollView style={{ flex: 1, paddingTop: inits.top == 0 ? 10 : inits.top + 10 }}>
            <ViewSpace>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}  style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primary, marginRight: 10, borderRadius: 10}}>
                        <Ionicons name="ios-arrow-back-circle" size={26} color={COLORS.gray} />
                    </TouchableOpacity>
                    <TextInput placeholderTextColor={COLORS.gray} placeholder='Search photo' style={{flex: 6, backgroundColor: COLORS.primary, padding: 10, borderRadius: 10, fontFamily: FONTS.latoLight, fontSize: 16, color: COLORS.dark }} />
                </View>
            </ViewSpace>
            <ViewSpace>
                <TextCustom align='center' size={26} font={FONTS.latoBlack}>Popular photos</TextCustom>
            </ViewSpace>
            <ViewSpace>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('PhotoView', {id: 3})} style={{ borderRadius: 15, overflow: 'hidden', marginRight: 20 }}>
                        <ImageBackground
                            style={{ width: ((deviceWidth - 60) / 2), height: deviceWidth / 2 }}
                            resizeMode={'cover'}
                            source={{ uri: 'https://images.unsplash.com/photo-1643543232295-061cc8f9069c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80' }}
                        >
                            <Text>csc</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 15, overflow: 'hidden' }}>
                        <ImageBackground
                            style={{ width: ((deviceWidth - 60) / 2), height: deviceWidth / 2 }}
                            resizeMode={'cover'}
                            source={{ uri: 'https://images.unsplash.com/photo-1643543232295-061cc8f9069c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80' }}
                        >
                            <Text>csc</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ViewSpace>
        </ScrollView>
    )
}

export default Search;