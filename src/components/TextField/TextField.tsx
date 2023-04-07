import React, { ChangeEvent, useState } from 'react';
import { ITextField } from './ITextField.interface';
import styles from './TextField.module.scss';

const TextField: React.FC<ITextField> = ({
    name,
    classes,
    id,
    onChangeHandler,
    readOnly,
    disabled,
    placeholder,
    defaultValue = '',
    value,
    type = 'text',
    onKeyDown
}) => {
    const [focused, setFocused] = useState<boolean>(false);
    const className = [
        `${styles['text-field']}`,
        `${focused ? styles.focused : ''}`,
        `${classes?.wrapper ? classes?.wrapper : ''}`
    ].filter((style) => style !== '').join(' ');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target }: { target: EventTarget | null } = event.nativeEvent;
        const inputValue = (target as HTMLInputElement).value;

        onChangeHandler(event, inputValue);
    };

    return (
        <div
            className={className}
            role="button"
            tabIndex={-1}
            onClick={() => setFocused(true)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={onKeyDown}
        >
            <input
                name={name}
                className={classes?.input}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                readOnly={readOnly}
                disabled={disabled}
                value={value}
                defaultValue={defaultValue}
                type={type}
            />
        </div>
    );
};
export default TextField;