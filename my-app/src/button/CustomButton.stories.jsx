import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  pink,
  purple,
  teal,
  green,
  yellow,
  orange,
} from "@mui/material/colors";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "@mui/material/Button";
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: teal[500],
    },
    customColor: {
      main: pink[300],
    },
    green: {
      main: green[200],
    },
    yellow: {
      main: yellow[500],
    },
    orange: {
      main: orange[500],
    },
  },
});

export default {
  title: "UI/Button",
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
    withKnobs,
  ],
  argTypes: {
    color: {
      options: [
        "yellow",
        "green",
        "orange",
        "primary",
        "secondary",
        "customColor",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    borderRadius: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    children: {
      options: ["hi", "looks good!", "fine!"],
      control: { type: "radio" },
    },
  },
};

const Template = ({ color, size, children, onClick, backgroundColor }) => (
  <Button
    sx={{ mt: 20, ml: 20 }}
    variant="contained"
    color={color}
    size={size}
    style={{ backgroundColor }}
    onClick={action("Button Clicked")}
  >
    {children}
  </Button>
);

export const Primary = (args) => {
  const { color, size, children } = args;
  // const backgroundColor = select(
  //   "background Color",
  //   ["primary", "secondary", "customColor"],
  //   "primary"
  // );

  return (
    <Template
      color={color}
      size={size}
      children={children}
      onClick={action("Button Clicked")}
      backgroundColor={args.backgroundColor}
    >
      {children}
    </Template>
  );
};
Primary.args = {
  color: "primary",
  size: "small",
  children: "hellllloooow",
  backgroundColor: "primary",
};
///////////////////////////////////////////////////////////////////
export const Secondary = (args) => {
  const { color, size, children } = args;

  return (
    <Template
      color={color}
      size={size}
      children={children}
      onClick={action("Button Clicked")}
    >
      {children}
    </Template>
  );
};
Secondary.args = {
  color: "orange",
  size: "large",
  children: "O!!!",
};
