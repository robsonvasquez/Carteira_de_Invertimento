import { useAuth } from "../../contexts/AuthProvider/useAuth"

export const ProtecteLayout = ({children}: {children: JSX.Element}) => {
    const auth = useAuth();

    if(!auth.email){
        return <h1>n deu</h1>
    }

    return children;
}