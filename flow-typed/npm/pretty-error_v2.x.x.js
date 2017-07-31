// flow-typed signature: 83d75e86e6973012d1ae78bc77eb1fc4
// flow-typed version: b43dff3e0e/pretty-error_v2.x.x/flow_>=v0.16.x

declare module 'pretty-error' {
  declare class PrettyError {
    static constructor(): PrettyError;
    static start(): void;
    alias(toBeAliased: string, alias: string): void;
    appendStyle(style: Object): void;
    render(error: Error): void;
    skip(skipFn: (traceline: Object, lineNumber: number) => bool): void;
    skipNodeFiles(): void;
    skipPackage(...packages: string[]): void;
    skipPath(path: string): void;
    start(): void;
    withoutColors(): void;
  }
  declare var exports: Class<PrettyError>;
}
