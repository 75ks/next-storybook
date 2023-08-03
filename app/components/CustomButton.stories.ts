import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './CustomButton';

const meta: Meta<typeof CustomButton> = {
	title: 'components/CustomButton',
	component: CustomButton,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		disabled: { control: 'boolean' },
		label: { control: 'text' },
		size: { control: 'inline-radio' },
		color: { control: 'inline-radio' },
	},
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Enabled: Story = {
	args: {
		disabled: false,
		label: 'Enabled Button',
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		label: 'Disabled Button',
	}
};

export const Small: Story = {
	args: {
		disabled: false,
		label: 'Small Button',
		size: 'small'
	}
};

export const Medium: Story = {
	args: {
		disabled: false,
		label: 'Medium Button',
		size: 'medium'
	}
};

export const Large: Story = {
	args: {
		disabled: false,
		label: 'Large Button',
		size: 'large'
	}
};

export const Blue: Story = {
	args: {
		disabled: false,
		label: 'Blue Button',
		color: 'blue',
	}
};

export const Red: Story = {
	args: {
		disabled: false,
		label: 'Red Button',
		color: 'red',
	}
};

export const Green: Story = {
	args: {
		disabled: false,
		label: 'Green Button',
		color: 'green',
	}
};

export const Gray: Story = {
	args: {
		disabled: false,
		label: 'Gray Button',
		color: 'gray',
	}
};
