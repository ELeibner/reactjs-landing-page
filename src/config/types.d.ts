import { FC, SVGProps } from 'react';
declare module '*.jpg';
declare module '*.png';
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';

declare module '*.svg' {
    export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
