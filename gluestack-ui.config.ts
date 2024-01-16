
import { config as defaultConfig } from "@gluestack-ui/config";

export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,

    primary100: '#FFD2A4',
    primary200: '#A54E28',
    black100: '#161722',
    black200: '#1C1D28',
    white100: '#FFFFFF',
    orange100: '#FFF5EB',
    gray100: '#F5F2F0',
    gray200: 'rgba(255, 255, 255, 0.15)',

    },
    fonts: {
      heading: 'Roboto Condensed, sans-serif', 
      body: 'Roboto Condensed, sans-serif',
      mono: 'Roboto Condensed ,sans-serif',
    },
  } as const,

};

type Config = typeof config;
declare module "@gluestack-ui/config" {
  interface IConfig extends Config {}
}