import { createContext, Dispatch, SetStateAction } from "react";

export interface IAppContext {
    currentUser: any
    signOut: () => void
    setCurrentUser: Dispatch<SetStateAction<null>>
}
  
export default createContext<IAppContext>({} as IAppContext);