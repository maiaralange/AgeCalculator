import { ReactNode, createContext, useContext, useState } from 'react';

export interface Age {
  day: string;
  month: string;
  year: string;
}

interface AgeContextData {
  age: Age;
  calculateAge: (
    birthDate: number,
    birthMonth: number,
    birthYear: number
  ) => void;
}

interface AgeProviderProps {
  children: ReactNode;
}

const AgeContext = createContext<AgeContextData>({} as AgeContextData);

export function AgeProvider({ children }: AgeProviderProps) {
  const [age, setAge] = useState<Age>({
    day: '--',
    month: '--',
    year: '--'
  });

  function calculateAge(
    birthDate: number,
    birthMonth: number,
    birthYear: number
  ) {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const today = new Date();
    let day = today.getDate(),
      month = today.getMonth() + 1,
      year = today.getFullYear();

    if (birthDate > day) {
      day = day + daysPerMonth[birthMonth - 1];
    }

    if (birthMonth > month) {
      year = year - 1;
      month = month + 12;
    }

    const age: Age = {
      day: String(day - birthDate),
      month: String(month - birthMonth),
      year: String(year - birthYear)
    };
    setAge(age);
  }

  return (
    <AgeContext.Provider value={{ age, calculateAge }}>
      {children}
    </AgeContext.Provider>
  );
}

export function useAge() {
  const context = useContext(AgeContext);
  return context;
}
