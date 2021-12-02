import React from "react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components / Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export const Default = (props: ButtonProps) => <Button {...props} />;

Default.args = {
  disabled: false,
  children: "Click me",
};

export const Disabled = (props: ButtonProps) => <Button {...props} />;

Disabled.args = {
  disabled: true,
  children: "Don't click me",
};
