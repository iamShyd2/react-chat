import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'ui/pages/HomePage';
import NewChatPage from 'ui/pages/NewChatPage';
import ShowChatPage from 'ui/pages/ShowChatPage';
import SignInPage from 'ui/pages/SignInPage';

const stackBuilder = (Component, path) => ({ Component, path });

const stacks = [
  stackBuilder(SignInPage, "/sign_in"),
  stackBuilder(HomePage, "/"),
  stackBuilder(NewChatPage, "/chatrooms/new"),
  stackBuilder(ShowChatPage, "/chat/:id"),
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
