import React from "react";
import "../styles/Button.css";

interface IButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    active: boolean;
    /**
     * The background color of the button
     */
    backgroundColor?: string;
    /**
     * What text to display on the button
     */
    text?: string;
    /**
     * The font color of the button
     */
    color?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * The button click handler, could be called when inactive
     */
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // (event) => React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    const mode = props.active ? 'btn--active' : 'btn--inactive';
    const size = props.size == null ? 'medium' : props.size;
    const click = props.active ? props.onClick : undefined;
    return (
        <button
            className={['btn', `btn--${size}`, mode].join(' ')}
            onClick={click}
            style={{
                backgroundColor: props.backgroundColor,
                color: props.color
            }}
        >
            {props.text}
        </button >
    );
}
