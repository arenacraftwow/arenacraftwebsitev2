import React from "react";
import { createUseStyles } from "react-jss";
import { Button } from "./ui/Button";
import { Heading, SubHeading } from "./ui/Typography";
import { useRouter } from 'next/router';

const useStyles = createUseStyles({
    root: {
        float: 'right',
        border: '1px solid white',
        padding: '1rem',
        background: '#1f2329',
        margin: '1rem',
        maxWidth: 420
    },
    subHeadingExtra: {
        marginTop: -12,
    },
    textSection: {
        fontSize: '1.2rem'
    },
    reasonsList: {
        // padding: 0,
        margin: '0.5rem 0',
    },
    reasonsListItem: {
        margin: '0.5rem 0 0 0',
    },
    callToAction: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-end',
    },
});

export function ArenaCraftJumbotron() {
    const cls = useStyles();
    const router = useRouter();

    return (
        <div className={cls.root}>
            <Heading size={3.5}>Play Arena,</Heading>
            <SubHeading size={2.5} className={cls.subHeadingExtra}>without the bulls#*t</SubHeading>
            <p className={cls.textSection}>
                What if:
                <ul className={cls.reasonsList}>
                    <li className={cls.reasonsListItem}>The game wasn't stuck at one patch since 10 years?</li>
                    <li className={cls.reasonsListItem}>You didn't have to grid PvE to be competetive in PvP?</li>
                    <li className={cls.reasonsListItem}>The developers actually played & understood the game?</li>
                </ul>
                <p>
                    Enter <strong>ArenaCraft</strong>
                </p>
            </p>
            <div className={cls.callToAction}>
                <Button dense buttonProps={{
                    onClick() {
                        router.push('/create-account')
                    }
                }}>SIGN UP</Button>
            </div>
        </div>
    )
}