import { HTMLAttributes, ReactNode } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    title?: string;
    actions?: ReactNode;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}
