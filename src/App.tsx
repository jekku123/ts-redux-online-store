import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import List from './components/List';
import StoreNavbar from './components/StoreNavbar';

function App() {
    return (
        <BrowserRouter>
            <StoreNavbar />
            <Routes>
                <Route index element={<List />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
