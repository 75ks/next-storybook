import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
	// サイドバーの表示名
	title: "components/Button/Features",
	// 対象コンポーネント
	component: CustomButton,
	// ストーリーの表示オプション
	parameters: {
		// 配置
		layout: "centered",
		// Controlsタブの表示
		controls: { disable: true },
	},
	// Propsの情報
	argTypes: {
		disabled: { control: "boolean" },
		label: { control: "text" },
		size: { control: "inline-radio" },
		color: { control: "inline-radio" },
	},
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Enabled: Story = {
	args: {
		disabled: false,
		label: "Enabled Button",
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		label: "Disabled Button",
	}
};

export const Small: Story = {
	args: {
		label: "Small Button",
		size: "small"
	}
};

export const Medium: Story = {
	args: {
		label: "Medium Button",
		size: "medium"
	}
};

export const Large: Story = {
	args: {
		label: "Large Button",
		size: "large"
	}
};

export const Blue: Story = {
	args: {
		label: "Blue Button",
		color: "blue",
	}
};

export const Red: Story = {
	args: {
		label: "Red Button",
		color: "red",
	}
};

export const Green: Story = {
	args: {
		label: "Green Button",
		color: "green",
	}
};

export const Gray: Story = {
	args: {
		label: "Gray Button",
		color: "gray",
	}
};
