import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TextCustom from './TextCustom';
import ViewSpace from './ViewSpace';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { API } from '../constants/api';
import { useEffect } from 'react';

type NativeStackProp = {
    Tabs: undefined,
    Search: undefined,
};

interface HomeProps {
    navigation: any,
}

const Home = ({navigation}: HomeProps) => {
    const inits = useSafeAreaInsets();

    // const getTopLinks = async () => {
    //     console.log(API.link+'topics/?'+new URLSearchParams({client_id: API.apiKey, order_by: 'featured', per_page: '5'}));
    //     // await fetch(API.link+'topics/?'+new URLSearchParams({client_id: API.apiKey, order_by: 'featured', per_page: '5'}))
    //     // .then(response => {
    //     //     if (!response.ok) throw Error(response.statusText);
    //     //     return response.json();
    //     // })
    //     // .then(response => console.log(response))
    //     // .catch( _ => console.log(_));
    // }

    // useEffect(() => {
    //     getTopLinks();
    // }, []);


    return (
        <ScrollView style={{ paddingTop: inits.top == 0 ? 30 : inits.top + 30, flex: 1 }}>
            <ViewSpace>
                <TextCustom font={FONTS.latoBlack} size={34}>Find your fav photo to inspired</TextCustom>
            </ViewSpace>
            <ViewSpace>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{justifyContent: 'flex-start',alignItems: 'center', flexDirection: 'row', backgroundColor: COLORS.primary, borderRadius: 15, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}>
                    <View style = {{marginRight: 20}}>
                        <FontAwesome name="search" size={24} color={COLORS.gray} />
                    </View>
                    <View>
                        <TextCustom font={FONTS.latoLight} size={15}>Find photo</TextCustom>
                    </View>
                </TouchableOpacity>
            </ViewSpace>
        </ScrollView>
    )
}

export default Home;