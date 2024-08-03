import { Button } from "./button";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  component: Button,
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const FullWidth: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
    children: "Full Width",
  },
  render: (args) => {
    const [count, setCount] = useState(0);
    return (
      <Button {...args} onClick={() => setCount(count + 1)} children={count} />
    );
  },
};
