import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    TextComponent?: any
}

const Text: FC<TextProps> = ({ TextComponent = "p", children, ...others }) => {
    return(
        <TextComponent
            {...others}
        >
            {children}
        </TextComponent>
    )
}

export default Text;