// App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import NewPage from './page/NewPage';
import { FilterSortProvider } from './component/FilterSortContext';
import Header from './component/Header';
import TransitionCounter from './component/TransitionCounter';


const App: React.FC = () => {
  return (
    <div className="App">
      <FilterSortProvider>
        
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-page" element={<NewPage />} />
          </Routes>
          <TransitionCounter />
        
      </FilterSortProvider>
    </div>
  );
};

export default App;
