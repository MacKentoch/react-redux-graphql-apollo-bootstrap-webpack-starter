// flow-typed signature: 6d9418485a3aa65a5a6d49ea1acf7541
// flow-typed version: da30fe6876/pretty-error_v2.x.x/flow_>=v0.25.x

declare module "pretty-error" {
  declare class PrettyError {
    static constructor(): PrettyError;
    static start(): void;
    alias(toBeAliased: string, alias: string): void;
    appendStyle(style: Object): void;
    render(error: Error): void;
    skip(skipFn: (traceline: Object, lineNumber: number) => boolean): void;
    skipNodeFiles(): void;
    skipPackage(...packages: string[]): void;
    skipPath(path: string): void;
    start(): void;
    withoutColors(): void;
  }
  declare module.exports: Class<PrettyError>;
}
