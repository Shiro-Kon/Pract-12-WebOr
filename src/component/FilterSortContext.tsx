// FilterSortContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterSortState {
  filters: any; // Типы фильтров нужно определить в соответствии с вашими требованиями
  sorting: string | null; // Тип сортировки также нужно определить
}

interface FilterSortContextType {
  state: FilterSortState;
  setState: React.Dispatch<React.SetStateAction<FilterSortState>>;
}

const FilterSortContext = createContext<FilterSortContextType | undefined>(undefined);

export const FilterSortProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<FilterSortState>({
    filters: {},
    sorting: null,
  });

  return (
    <FilterSortContext.Provider value={{ state, setState }}>
      {children}
    </FilterSortContext.Provider>
  );
};

export const useFilterSort = () => {
  const context = useContext(FilterSortContext);
  if (!context) {
    throw new Error('useFilterSort must be used within a FilterSortProvider');
  }
  return context;
};
