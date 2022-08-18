import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import CampDetail from "./components/CampDetail/CampDetail";
import New from "./components/New/New";
import prefilledCamps from "./PrefilledCamps";
import { UserContext, users } from "./Users";
import { useState } from "react";
import Camp from "./utils/Camp";
import CampContext from "./CampContext";

function App() {
    const [camps, setCamps] = useState<Camp[]>(prefilledCamps);
    const campValue = { camps, setCamps };
    return (
        <CampContext.Provider value={campValue}>
            <UserContext.Provider value={users}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/campgrounds" element={<Home />}></Route>
                        <Route
                            path="/campgrounds/new"
                            element={<New />}
                        ></Route>
                        <Route
                            path="/campgrounds/:campID"
                            element={<CampDetail />}
                        ></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </CampContext.Provider>
    );
}

export default App;
