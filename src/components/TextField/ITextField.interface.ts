import { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

export type Classes = {
    wrapper?: string;
    input?: string;
};

export interface ITextField {
    name?: string;
    classes?: Classes;
    placeholder?: string;
    id?: string;
    onChangeHandler(event: ChangeEvent, value?: string | null): void;
    readOnly?: boolean;
    disabled?: boolean;
    defaultValue? :string;
    value?: string;
    type?: string;
    onKeyDown?(event: KeyboardEvent<Element>): void;
}
