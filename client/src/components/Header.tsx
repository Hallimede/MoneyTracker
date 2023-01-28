import React from 'react';
import '../styles/Header.css';

export interface IHeaderProps {
    /**
     * This is the title of the header
     */
    title: string,
    /**
     * This is the back button click handler
     */
    back?: () => void
}

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    return (
        (
            <header className='app-header'>
                {props.back != null ? <img className='back-btn' alt='' src='back.svg' onClick={props.back} /> : null}
                <section className='app-title'>
                    <h1>{props.title}</h1>
                </section>
            </header>
        )
    )
}