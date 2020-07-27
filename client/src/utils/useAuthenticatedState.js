import React, {useState, useEffect, useContext} from "react";
import LoginContext from "../LoginContext";

function useAuthenticatedState() {
  
  const [loggedIn, setLoggedIn] = useState(null); // set to null because it will take time to complete fetch request


  // make fetch call to see if user is logged in (run when component mounts)
  useEffect(() => {
    const abortCtrl = new AbortController();
    const opts = {signal: abortCtrl.signal};

    fetch("/api/authenticated")
      .then(res => {
        if (res.status >= 400 && res.status <= 600) {
          console.log("not logged in");
          setLoggedIn(false);
        } else {
          return res.json();
        }
      })
      .then(data => {
        setLoggedIn(data);
      })
      .catch(error => {
        console.log("caught an error", error);
        setLoggedIn(false);

        if (error.name === "AbortError") {
          console.log("request was cancelled");
        }
      })
      

    return () => abortCtrl.abort();
  }, []);


  return [loggedIn, setLoggedIn];
}


export default useAuthenticatedState;