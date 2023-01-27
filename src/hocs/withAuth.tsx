import React, { FC } from 'react';
import useFetch from '../lib/useFetch';
import AppContext from '../contexts/AppContext';

const withAuth = (Component: FC) => {
  return () => {

    const [currentUser, setCurrentUser] = React.useState(null);

    const onSuccess = (body: any) => {
      setCurrentUser(body.data);
    }

    const {
      onFetch,
      isFetching,
    } = useFetch("/validate_token", onSuccess);

    const validateToken = async () => {
      await onFetch();
    }

    React.useEffect(() => {
      validateToken()
    }, []);

    const signOut = () => {
      localStorage.removeItem("token");
      setCurrentUser(null);
    }

    const appContext = {
      currentUser,
      isFetching,
      signOut,
      setCurrentUser,
    }

    if (isFetching) return null;

    return (
      <AppContext.Provider
        value={appContext}
      >
        <Component />
      </AppContext.Provider>
    );
  }
}

export default withAuth;
