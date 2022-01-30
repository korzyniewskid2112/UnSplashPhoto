import { NavigatorScreenParams } from '@react-navigation/native';

export type TabsParamList = {
    Home: undefined
}

export type StackParamList = {
    Tabs: NavigatorScreenParams<TabsParamList>,
    Search: undefined,
    PhotoView: {id: number}
}