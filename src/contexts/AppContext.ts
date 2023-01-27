import { createContext, Dispatch, SetStateAction } from "react";

export interface IAppContext {
    currentUser: any
    signOut: () => void
    setCurrentUser: Dispatch<SetStateAction<null>>
    isFetching: boolean
}
  
export default createContext<IAppContext>({} as IAppContext);