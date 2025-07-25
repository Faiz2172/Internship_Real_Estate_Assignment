import React from 'react';
import Layout from './components/layout/Layout';
import PropertyList from './components/property/PropertyList';
import { PropertyProvider } from './context/PropertyContext';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <PropertyProvider>
        <Layout>
          <PropertyList />
        </Layout>
      </PropertyProvider>
    </ThemeProvider>
  )
}

export default App
