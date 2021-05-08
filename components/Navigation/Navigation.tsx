import React from 'react';
import { createUseStyles } from 'react-jss';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { classNames } from 'utils';

const useStyles = createUseStyles({
    root: {
        marginTop: 12,
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        textAlign: 'center',
        color: 'white',
        fontSize: '3rem',
        padding: 0,
        margin: 0,
        position: 'relative'
    },
    headingAccent: {
        textDecoration: 'underline',
        display: 'inline-block',
        width: 50,
        height: 65,
        border: '2px solid'
    },
    headingAccentRest: {
        color: 'rgba(255, 255, 255, 0.7)',
    },
    navList: {
        backgroundColor: '#1f2329',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        listStyle: 'none',
        width: '100%'
    },

});

export function Navigation() {
    const cls = useStyles();
    return (
        <nav className={cls.root}>
            <h1 className={cls.heading}>
                <span className={cls.headingAccent}>A</span>renaCraft<span className={cls.headingAccentRest}>Project</span>
            </h1>
            <ul className={cls.navList}>
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/create-account">CREATE ACCOUNT</NavLink>
                <NavLink href="/mini-client">MINI CLIENT</NavLink>
                <NavLink href="/changelist">CHANGELIST</NavLink>
                <NavLink href="https://github.com/arenacraftwow" remote>SOURCE↗</NavLink>
            </ul>
        </nav>
    );
}


const useNavLinkStyles = createUseStyles({
    root: {
        padding: '12px 0 17px 0',
        marginRight: '2rem',
        fontWeight: 'bold',
        borderBottom: '2px solid transparent',
        cursor: 'pointer',
        '&:hover': {
            borderBottom: '2px solid #aaa'
        },
        '&:active': {
            borderBottom: '2px solid #fff'
        },
        
    },
    onActive: {
        borderBottom: '2px solid #61dafb',
        '&:hover': {
            borderBottom: '2px solid #61dafb'
        }
    }
});

interface NavLinkProps {
    href: string;
    remote?: boolean;
}

function NavLink({
    children,
    href,
    remote,
}: React.PropsWithChildren<NavLinkProps>) {
    const cls = useNavLinkStyles();
    const router = useRouter();
    const isActive = router.pathname.endsWith(href);
    const handleClick = () => {
        if (!remote) {
            router.push(href);
        }
    }
    return (
        <li
            className={classNames(cls.root, isActive && cls.onActive)}
            onClick={handleClick}
        >
            {remote &&
                <a href={href} target={'_blank'} rel={'noopener noreferrer'}>
                    {children}
                </a>
            }
            {!remote &&
                <Link href={href}>
                    <a>
                        {children}
                    </a>
                </Link>
            }
        </li>
    )
}

