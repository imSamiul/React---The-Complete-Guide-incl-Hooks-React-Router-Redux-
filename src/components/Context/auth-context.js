import React, { useEffect, useState } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const stroedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (stroedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogOut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthContext };
