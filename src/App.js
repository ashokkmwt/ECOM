import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer/Footer';
import Error from './pages/Error';
import { ProductProvider } from './context/productContext';
import { FilterContextProvider } from './context/filterContext';
import ProductWithIdPage from './pages/ProductWithIdPage';

function App() {
  return (
    <ProductProvider>
      <FilterContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<Error />} />
            <Route path='/singleProduct/:id' element={<ProductWithIdPage />} />
            {/* <Route path='/login' element={< />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </FilterContextProvider>
    </ProductProvider>
  );
}

export default App;