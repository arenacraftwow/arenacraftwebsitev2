import React from "react";
import { createUseStyles } from "react-jss";
import { classNames } from "utils";

const useHeadingStyles = createUseStyles({
    root: (props: HeadingProps) => ({
        fontSize: `${props.size}rem`,
        padding: 0,
        margin: 0,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.95)'
    })
});


interface HeadingProps {
    size?: number;
}

export function Heading(props: React.PropsWithChildren<HeadingProps>) {
    const cls = useHeadingStyles(props);
    return (
        <h3 className={cls.root}>
            {props.children}
        </h3>
    );
}

Heading.defaultProps = {
    size: 2
};


const useSubHeadingStyles = createUseStyles({
    root: (props: SubHeadingProps) => ({
        fontSize: `${props.size}rem`,
        padding: 0,
        margin: 0,
        fontWeight: 'normal',
        color: 'rgba(255, 255, 255, 0.7)'
    })
});

interface SubHeadingProps {
    className?: string;
    size?: number;
}

export function SubHeading(props: React.PropsWithChildren<SubHeadingProps>) {
    const cls = useSubHeadingStyles(props);
    const classes = classNames(cls.root, props.className);
    return (
        <h3 className={classes}>
            {props.children}
        </h3>
    );
}

SubHeading.defaultProps = {
    size: 1.5
};