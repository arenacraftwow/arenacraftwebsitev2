import React from 'react';
import { createUseStyles } from 'react-jss';
import { classNames } from 'utils';
import { Labeled, LabeledProps } from './Labeled';

interface Props extends LabeledProps {
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

export function TextField({
    label,
    helper,
    inputProps,
    hasError
}: Props) {
    const cls = useStyles();
    return (
        <Labeled
            label={label}
            helper={helper}
            hasError={hasError}
        >
            <input
                {...inputProps}
                className={classNames(cls.textfield, inputProps?.className || false)}
            />
        </Labeled>
    )
}


const useStyles = createUseStyles({
    textfield: {
        fontWeight: "bold",
        fontSize: "1.1rem",
        color: "white",
        width: "100%",
        padding: "7px",
        backgroundColor: "#1f2329",
        border: "2px solid rgba(255, 255, 255, 0.86)",
        '&:focused': {
            outline: '2px solid #61dafb',
        }
    }
});