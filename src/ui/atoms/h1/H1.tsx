import { FC } from "react";
import Text, { TextProps } from "../text/Text";

export interface H1Props extends TextProps{
}

const H1: FC<H1Props> = ({ children, ...others }) => {
    return(
        <Text
            TextComponent="h1"
            {...others}
        >
            {children}
        </Text>
    )
}

export default H1;