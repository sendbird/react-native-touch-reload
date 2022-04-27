import React, { PropsWithChildren } from 'react';
declare type Props = PropsWithChildren<{
    DEFAULT_VISIBLE?: boolean;
    ACTIVE_TOUCHES?: number;
}>;
declare const TouchReload: React.FC<Props>;
export declare const withTouchReload: (Component: (props: object) => JSX.Element, DEFAULT_VISIBLE?: boolean | undefined, ACTIVE_TOUCHES?: number | undefined) => (props: object) => JSX.Element;
export default TouchReload;
