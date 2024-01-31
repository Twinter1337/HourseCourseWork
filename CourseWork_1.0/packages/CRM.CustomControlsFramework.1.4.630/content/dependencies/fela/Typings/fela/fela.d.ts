declare namespace Fela {
    function createRenderer(config?: any): Renderer;
    function combineRules(): any;
    function enhance(): any;

    interface IConfig {
        plugins: any[];
        keyframePrefixes: string[];
        enhancers: any[];
        mediaQueryOrder: string[];
    }

    //Instance createRenderer returns to provide methods to render your styles
    class Renderer {
        public renderRule(rule: any, props: any[]): string;
        public renderKeyframe(keyframe: any, props: any[]): string;
        /*
         * return: @font-face rule?
         */
        public renderFont(family: string, files: string[], props: any[]): any;
        public renderStatic(style: string|Object, selector: string): void;
        public renderToString(): string;
        public subscribe(listener: any): Object;
        public clean(): void;
    }
}

declare module "fela" {
    export = Fela;
}