import { FC } from "react";
import Text, { TextProps } from "./text/Text";

export interface H2Props extends TextProps{
}

const H2: FC<H2Props> = ({ children, ...others }) => {
    return(
        <Text
            TextComponent="h2"
            {...others}
        >
            {children}
        </Text>
    )
}

export default H2;