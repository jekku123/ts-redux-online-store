import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Root from './Root';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}>
                <Route index element={<ProductList />} />
                <Route path='/products' element={<Cart />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
