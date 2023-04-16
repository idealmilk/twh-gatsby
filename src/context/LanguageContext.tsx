import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useEffect,
} from 'react';

interface ILanguage {
  isEnglish: boolean;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<ILanguage>({
  isEnglish: true,
  toggleLanguage: () => {},
});

interface ILanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<ILanguageProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<ILanguage>({
    isEnglish: true,
    toggleLanguage: () => {},
  });

  useEffect(() => {
    // Initialize isEnglish state with localStorage value, or default to true
    const storedIsEnglish = localStorage.getItem('isEnglish');
    const initialIsEnglish = storedIsEnglish
      ? JSON.parse(storedIsEnglish)
      : true;

    // Update the state and setLoading to false once everything has been initialized
    setState({
      isEnglish: initialIsEnglish,
      toggleLanguage: () => {
        setState((prevState) => ({
          ...prevState,
          isEnglish: !prevState.isEnglish,
        }));
      },
    });
    setLoading(false);
  }, []);

  // Update localStorage value when isEnglish state changes
  useEffect(() => {
    localStorage.setItem('isEnglish', JSON.stringify(state.isEnglish));
  }, [state.isEnglish]);

  if (loading) {
    return <div />;
  }

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};
