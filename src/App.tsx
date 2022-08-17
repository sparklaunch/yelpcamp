import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/campgrounds" element={<Home />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
