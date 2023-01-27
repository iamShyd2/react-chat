import { StandardTextFieldProps, TextField as TF } from "@material-ui/core"
import { FC } from "react"

interface TextFieldProps extends StandardTextFieldProps {
    
}

const TextField: FC<TextFieldProps> = (props) => {
    return (
        <TF
            margin="normal"
            fullWidth
            {...props}
        />
    )
}

export default TextField;