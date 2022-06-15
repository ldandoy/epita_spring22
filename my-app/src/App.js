import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

import Button from "./components/Button"
import Home from "./pages/Home"

const App = () => {
    return <>
        <h1>App</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/button" element={<Button />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default App
