declare namespace ReactFela {

    interface ComponentDecorator<TOriginalProps, TOwnProps> {
        (component: React.ComponentClass<TOriginalProps> | React.StatelessComponent<TOriginalProps>): React.ComponentClass<TOwnProps>;
    }

    function connect<TStyleProps, TOwnProps>(
        mapStyleToProps: IMapStyleProps<TStyleProps, TOwnProps>
        ): any;

    interface IMapStyleProps<TStyleProps, TOwnProps> extends Function {
        (style: any, ownProps: TOwnProps): TStyleProps;
    }

    function createComponent(rule: any, type: string, passThroughProps: any[]): any;


    interface IProviderProps {
        renderer?: any;
        mountNode?: HTMLElement;
    }

    class Provider extends React.Component<IProviderProps, {}> { }
}

declare module "react-fela" {
    export = ReactFela;
}

