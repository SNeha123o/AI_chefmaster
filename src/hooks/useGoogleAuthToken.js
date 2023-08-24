import {useMutation} from '@tanstack/react-query';
import { getGoogleAuthToken, TOKEN_KEY } from '../api';

const useGoogleAuthToken = () => {
   return  useMutation({
        mutationKey:["google_auth_token"],
        mutationFn:(Credential) => getGoogleAuthToken(Credential),
        onSuccess:(data) => {
            const {access} = data;
            localStorage.setItem(TOKEN_KEY,access)
        }
    })


}

export default useGoogleAuthToken;