import {AButton} from "../index";

export default{
    title: 'Atom/AButton',
    component: AButton,
    argTypes: {
        type: {
            options: ['success', 'warning','danger','default'],
            control: { type: 'radio' },
        },

    },
}

const Template = (args) => <AButton {...args}>{args.label}</AButton>

export const Default = Template.bind({});
Default.args = {
    label: 'Hello World',
    outlined:true,
    type:'success',
    disabled:false
};

