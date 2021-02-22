import React from 'react';
import classNames from 'classnames';

function Button({onClick, className, outLine, children }) {
    return (
        <button
        onClick={onClick}
        className={classNames('button', className, {
            'button--outline': outLine,
        })}>
        {children}
        </button>
    );
}
export default Button;