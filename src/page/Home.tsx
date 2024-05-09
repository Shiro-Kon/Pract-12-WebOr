// Home.tsx
import React from 'react';
import { useFilterSort } from '../component/FilterSortContext';

const Home: React.FC = () => {
  const { state } = useFilterSort();

  // Пример данных, которые будут фильтроваться и сортироваться
  const items = [
    { id: 1, name: 'Item 1', category: 'Category A' },
    { id: 2, name: 'Item 5', category: 'Category B' },
    { id: 3, name: 'Item 3', category: 'Category G' },
    // Дополнительные элементы...
  ];

  // Применяем фильтры
  let filteredItems = items;
  if (state.filters.category) {
    filteredItems = filteredItems.filter(item => item.category === state.filters.category);
  }

  // Применяем сортировку
  if (state.sorting === 'name') {
    filteredItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="container mx-auto mt-8 text-center">
    
      <h1 className="text-xl font-bold mb-4">18. Створіть компонент, який буде відображати кількість переходів між сторінками.</h1>
      <h1 className="text-xl font-bold mb-4">19. Додайте можливість зберігати стан фільтрів та сортування при переході між сторінками.</h1>
      <h1 className="text-3xl font-bold mb-4">Welcome to Home Page</h1>
      <div className="text-lg">
        <div>Filters: {JSON.stringify(state.filters)}</div>
        <div>Sorting: {state.sorting}</div>
        <div>
          <h2 className="text-xl font-bold mt-8 mb-4">Filtered and Sorted Items:</h2>
          <ul className="list-disc">
            {filteredItems.map(item => (
              <li key={item.id}>{item.name} - {item.category}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
