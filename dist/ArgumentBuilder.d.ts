export default class ArgumentBuilder {
    #private;
    Append(arg: string): ArgumentBuilder;
    Append(arg: string, param: string): ArgumentBuilder;
    Append(args: string[]): ArgumentBuilder;
    Count(): number;
    Build(): string[];
    ToString(): string;
}
