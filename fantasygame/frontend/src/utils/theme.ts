export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}

export const lightTheme: Theme = {
  primaryColor: "#fafafa",
  secondaryColor: "#FFA500",
  backgroundColor: "#ffffff",
  textColor: "#000000",
};

export const darkTheme: Theme = {
  primaryColor: "#bb86fc",
  secondaryColor: "#FFA500",
  backgroundColor: "#121212",
  textColor: "#ffffff",
};
