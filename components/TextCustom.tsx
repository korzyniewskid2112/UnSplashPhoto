import {Text} from 'react-native';
import {COLORS, FONTS} from './../constants/theme';

interface TextCustomProps {
    children: string,
    size?: number,
    color?: string,
    font?: string,
    align?:  "left" | "auto" | "right" | "center" | "justify" | undefined,
}

const TextCustom = ({children, size = 14, color = COLORS.dark, font = FONTS.latoRegular, align= 'left'} : TextCustomProps) => (
    <Text style={{fontSize: size, color: color, fontFamily: font, textAlign: align}}>{children}</Text>
)

export default TextCustom;