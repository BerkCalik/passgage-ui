import React from 'react';

export type ThemeType = {
  primaryColor: string;
  secondaryColor?: string;
  danger?: string;
  success?: string;
};

const defaultTheme: ThemeType = {
  primaryColor: 'tomato',
};

export const ThemeContext = React.createContext<ThemeType>(defaultTheme);

const ThemeProvider = ({
  theme,
  children,
}: {
  theme: ThemeType;
  children: any;
}) => {
  return (
    <ThemeContext.Provider value={theme || defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
