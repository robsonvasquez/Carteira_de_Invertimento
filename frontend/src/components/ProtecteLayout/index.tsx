import { useAuth } from "../../contexts/AuthProvider/useAuth"
import Login from "../../pages/Login";

export const ProtecteLayout = ({children}: {children: JSX.Element}) => {
    const auth = useAuth();

    if(!auth.email){
        return <Login/>
    }

    return children;
}