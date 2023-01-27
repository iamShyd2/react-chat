import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';

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
