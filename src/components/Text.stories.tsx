import { Text, TextProps } from './Text';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem Ipsum',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {} 

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children:  (
            <p>Text tag</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    },
    asChild: {
        table: {
            disable: true,
        }
    }
} 