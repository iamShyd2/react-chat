import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'ui/pages/HomePage';
import SignInPage from 'ui/pages/SignInPage';

const stackBuilder = (Component, path) => ({ Component, path });

const stacks = [
  stackBuilder(SignInPage, "/sign_in"),
  stackBuilder(HomePage, "/"),
  //stackBuilder(NewChatroom, "/chatrooms/new"),
  //stackBuilder(ShowChatroom, "/chat/:id"),
];

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {
          stacks.map(({ Component, path }, i) =>
            <Route
              key={i}
              path={path}
              element={<Component />}
            />
          )
        }
      </Routes>
    </BrowserRouter>
  );
};

export default App;
