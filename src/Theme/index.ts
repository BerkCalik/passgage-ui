import { createTheming } from '@callstack/react-theme-provider';

type ThemeType = {
  primaryColor: string;
};
type BaseThemeType = {
  theme: ThemeType;
};

const { ThemeProvider, withTheme, useTheme } = createTheming<ThemeType>({
  primaryColor: 'orange',
});

export { ThemeProvider, withTheme, useTheme, ThemeType, BaseThemeType };
