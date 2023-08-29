/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import useGoogleAuthLink from "../../hooks/useGoogleAuthLink";
import useGoogleAuthToken from "../../hooks/useGoogleAuthToken";
import useProfile from "../../hooks/useProfile"

const GoogleLogin = () => {

    const {profile,fetchProfile} = useProfile();
    const {googleAuth,fetchGoogleAuth} = useGoogleAuthLink();
    const {mutate,isSuccess} = useGoogleAuthToken();

    useEffect(() => {
        if(googleAuth){
            window.location.replace(googleAuth.authorizationUrl);
        }
    },[googleAuth]);

    useEffect(() => {
        const searchParams =new URLSearchParams(document.location.search);

        const code = searchParams.get("code");
        const state = searchParams.get("state");

        if(code && state){
            mutate({code,state})
        }
    },[mutate])

    useEffect(() => {
        if(googleAuth){
            window.location.replace(googleAuth.authorizationUrl);
        }
    },[googleAuth])

    const handleGoogleLogin = () =>{
        fetchGoogleAuth();
        fetchProfile()
    }

  return (
    <div>
      {profile ? (<h1>Hello {profile.firstName}</h1>) : (<button className="text-white" onClick={handleGoogleLogin}>Login with google</button>)}
    </div>
  )
}

export default GoogleLogin
