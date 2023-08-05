import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
	title: "components/Button/Playground",
	component: CustomButton,
	parameters: {
		layout: "centered",
	},
	// ドキュメントの自動生成
	tags: ["autodocs"],
	argTypes: {
		disabled: { control: "boolean" },
		label: { control: "text" },
		size: { control: "inline-radio" },
		color: { control: "inline-radio" },
	},
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Playground: Story = {
	args: {
		label: "Playground Button",
	}
};
