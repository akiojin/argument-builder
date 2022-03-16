export default class ArgumentBuilder {
    args: string[];
    Append(arg: string): void;
    Append(arg: string, param: string): void;
    Append(args: string[]): void;
    Count(): number;
    Build(): string[];
    ToString(): string;
}
