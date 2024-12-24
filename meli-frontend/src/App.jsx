import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SearchResults from './pages/searchResults/SearchResults';
import Home from './pages/Home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<SearchResults />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;