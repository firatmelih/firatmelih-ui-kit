import React from 'react';

import {AButton} from "../components/Atom";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/AButton',
    component: AButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        color: { select:{
            default:'default',
                red:'red',
                blue:'blue'
            } },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AButton {...args}>Hello World</AButton>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AButton.args = {
    primary: true,
    label: 'AButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'AButton',
};

