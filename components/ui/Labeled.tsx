import React from 'react';
import { createUseStyles } from 'react-jss';
import { classNames } from 'utils';

export interface LabeledProps {
    label: React.ReactChild;
    helper?: React.ReactChild;
    hasError?: boolean;
}

export function Labeled({
    children,
    label,
    helper,
    hasError,
}: React.PropsWithChildren<LabeledProps>) {
    const cls = useStyles();
    return (
        <div className={cls.root}>
            <label className={cls.label}>
                <span className={cls.labelText}>{label}</span>
                <span className={cls.labelNode}>{children}</span>
            </label>
            <div className={classNames(
                cls.helper,
                hasError && cls.hasError
            )}>{helper}</div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        display: "block",
        margin: "12px 0"
    },
    label: {
        display: "flex",
        flexFlow: "column nowrap"
    },
    labelNode: {
        width: '100%',
    },
    labelText: {
        fontSize: "1rem",
        marginBottom: "7px"
    },
    helper: {
        marginTop: "7px",
        fontSize: "0.9rem",
        fontStyle: "italic"
    },
    hasError: {
        color: '#ef6e6e',
    }
});