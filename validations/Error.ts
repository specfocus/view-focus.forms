import { FallbackProps } from '@specfocus/view-focus.notification/errors/fallback';
import PropTypes from 'prop-types';
import { ComponentType, ErrorInfo, HtmlHTMLAttributes, ReactElement } from 'react';
export declare const Error: {
    (props: InternalErrorProps & {
        errorComponent?: ComponentType<ErrorProps>;
    }): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        error: PropTypes.Validator<object>;
        errorInfo: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    };
};
interface InternalErrorProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'>, FallbackProps, ErrorProps {
    className?: string;
}
export type TitleComponent = string | ReactElement<any>;
export interface ErrorProps extends Pick<FallbackProps, 'error'> {
    errorInfo?: ErrorInfo;
    title?: TitleComponent;
}
export declare const ErrorClasses: {
    container: string;
    title: string;
    icon: string;
    panel: string;
    panelSumary: string;
    panelDetails: string;
    toolbar: string;
    advice: string;
};
export { };

