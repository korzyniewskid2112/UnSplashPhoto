import { View } from "react-native"

const ViewSpace = ({children} : {children: object}) => {
    return(
        <View style = {{paddingLeft: 20, paddingRight: 20, marginBottom: 30}}>
            {children}
        </View>
    )
}

export default ViewSpace;