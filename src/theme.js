import { createTheme } from "@material-ui/core/styles"

const primary = "#66FF00"
const secondary = "#0096d6"

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    text: {
      primary: "#333333",
    },
  },
  color: {
    white: "#fff",
    gray: {
      100: "#f3f2f0",
      200: "#E1E1E1",
      300: "#c5c5c5",
      400: "#939291",
      500: "#8a8a8a",
      600: "#626262",
      700: "#333333",
    },
    green: "#44b716",
    black: "#161616",
    purple: "#3E4A7C",
    blue: {
      500: "#0096d6",
      600: "#445260",
      700: "#223444",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          boxShadow: "none",
          borderRadius: 10,
          fontWeight: 700,
        },
      },
    },
  },
})

export default theme
