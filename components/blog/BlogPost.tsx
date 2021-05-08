import { Heading, SubHeading } from "components/ui/Typography";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    contentContainer: {
        fontSize: '1.1rem',
    }
});


interface Props {
    title: string;
    author: string;
    date: Date;
}

export function BlogPost({
    title,
    author,
    date,
    children,
}: React.PropsWithChildren<Props>) {
    const cls = useStyle();
    return (
        <div>
            <Heading>{title}</Heading>
            <SubHeading size={1.2}>by {author}, <i>{date.toISOString().substring(0, 10)}</i></SubHeading>
            <p className={cls.contentContainer}>
                {children}
            </p>
        </div>
    );
}