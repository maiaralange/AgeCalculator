import { ReactNode, createContext, useContext, useState } from 'react';

export interface Birthday {
  day: number;
  month: number;
  year: number;
}

interface BirthdayContextData {
  birthday: Birthday;
  setDay: (value: number) => void;
  setMonth: (value: number) => void;
  setYear: (value: number) => void;
}

interface BirthdayProviderProps {
  children: ReactNode;
}

const BirthdayContext = createContext<BirthdayContextData>(
  {} as BirthdayContextData
);

export function BirthdayProvider({ children }: BirthdayProviderProps) {
  const [birthday, setBirthday] = useState<Birthday>({
    day: 0,
    month: 0,
    year: 0
  });

  function setDay(value: number) {
    setBirthday({ ...birthday, day: value });
  }

  function setMonth(value: number) {
    setBirthday({ ...birthday, month: value });
  }

  function setYear(value: number) {
    setBirthday({ ...birthday, year: value });
  }

  return (
    <BirthdayContext.Provider value={{ birthday, setDay, setMonth, setYear }}>
      {children}
    </BirthdayContext.Provider>
  );
}

export function useBirthday() {
  const context = useContext(BirthdayContext);
  return context;
}
