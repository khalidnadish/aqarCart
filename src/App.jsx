import { useState, lazy, Suspense } from "react";
import AppHeader from "./component/AppHeader/AppHeader";
import AppFooter from "./component/AppFooter/AppFooter";
import AppBody from "./component/AppBody/AppBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
// import Loader from "./component/loader/Loader";
import "./App.css";

const Container = styled.div`
  display: flex;
  margin: auto;
  min-width: 300px;
  flex-direction: column;

  background-color:${({ theme }) => theme.bgLighter}; 
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const BodyWrapper = styled.div`
  display: flex;
  padding: 20px 0px;
  @media (max-width: 400px) {
    padding: 10px 20px;
    flex-direction: column;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <AppHeader darkMode={darkMode} setDarkMode={setDarkMode} />
          <BodyWrapper>
          <Suspense fallback={<h1>..loading</h1>}>
              <Routes>
                <Route path="/">
                  <Route index element={<AppBody />} />
                  {/* <Route path="signin" element={<SignIn />} /> */}
                  {/* <Route path="videopage" element={<Videopage />} />
                  <Route path="imagepage" element={<Imagepage />} />
                  <Route path="complainepage" element={<Complainepage />} />
                  <Route path="freedaypage" element={<Freedaypage />} />
                  <Route path="locationpage" element={<Locationpage />} />
                  <Route path="momentspage" element={<Momentspage />} />
                  <Route path="offerpage" element={<Offerpage />} />
                  <Route path="spesficationpage" element={<Spesficationpage />} />
                  <Route path="rankingpage" element={<Rankingpage />} /> */}
                  
                  
                  
                </Route>
              </Routes>
              </Suspense>


            
          </BodyWrapper>
          <AppFooter />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
