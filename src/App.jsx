import { useState, lazy, Suspense } from "react";
import AppHeader from "./component/AppHeader/AppHeader";
import AppFooter from "./component/AppFooter/AppFooter";
import AppBody from "./component/AppBody/AppBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import Sidemenu from "./component/AppHeader/Sidemenu";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Loader from "./component/loader/Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-width: 300px;
  width: 99%;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.bgLighter};

  @media (max-width: 500px) {
    padding: 10px 20px;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <AppHeader
              open={open}
              setOpen={setOpen}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <BodyWrapper>
              <Suspense fallback={<h1>..loading</h1>}>
                <Routes>
                  <Route path="/">
                    <Route index element={<AppBody />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Route>
                </Routes>
              </Suspense>
            </BodyWrapper>
            <AppFooter />
          </BrowserRouter>
          {open && (
            <Sidemenu
              open={open}
              setOpen={setOpen}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          )}
        </Container>
      </ThemeProvider>
      <ToastContainer
       
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
       
   
        // toastClassName={css({ fontFamily: "Cairo" })}
      />
    </>
  );
}

export default App;
