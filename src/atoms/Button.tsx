import { CircularProgress } from "@material-ui/core";
import { Button as Btn } from "@material-ui/core"
import { FC } from "react";

export interface ButtonProps {
    children: any
    isLoading?: boolean
    onClick: any
}

const Button: FC<ButtonProps> = ({ children, isLoading, ...others }) => {
    return (
        <Btn
            disabled={isLoading}
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 20 }}
            {...others}
        >
            {
                isLoading ?
                    <div style={{ color: "#fff", marginRight: 20 }}>
                        <CircularProgress
                            color="inherit"
                            size={30}
                        />
                    </div>
                    : null
            }
            {children}
        </Btn>
    )
}

export default Button;