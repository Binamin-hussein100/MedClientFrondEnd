import Form from "./SecureForm/form";
import {useAuth} from "../context/AuthContext";


const NewOrderSec = () =>{
    const {userId, user} = useAuth();
    console.log(user);

    return (
            <Form userId = {userId} user = {user.client}/>
    )
}

export default NewOrderSec;