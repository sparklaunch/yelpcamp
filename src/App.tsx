import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import { CampContext, camps } from "./Camps";

function App() {
    return (
        <CampContext.Provider value={camps}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/campgrounds" element={<Home />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </CampContext.Provider>
    );
}

export default App;
