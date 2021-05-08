import React from "react";
import { createUseStyles } from "react-jss";
import { classNames } from "utils";

const useButtonStyles = createUseStyles({
    root: {
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
        display: "block",
        padding: "1rem",
        fontSize: "1.3rem",
        backgroundColor: "#1f2329",
        border: "2px solid rgba(255, 255, 255, 0.86)",
        '&:focus': {
            outline: 'none',
            border: '2px solid #61dafb'
        },
        '&:active': {
            border: '2px solid white',
            backgroundColor: '#61dafb',
        },
        '&:disabled': {
            cursor: 'default',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            color: 'rgba(255, 255, 255, 0.3)',
            border: '2px solid rgba(255, 255, 255, 0.12)',
        }
    },
    dense: {
        fontSize: '1rem',
        padding: '0.5rem 1rem',
    }
});

interface Props {
    dense?: boolean;
    buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
}

export function Button({
    dense,
    buttonProps,
    children
}: React.PropsWithChildren<Props>) {
    const cls = useButtonStyles();

    return (
        <button
            className={classNames(cls.root, dense && cls.dense)}
            {...buttonProps}
        >
            {children}
        </button>
    );
}