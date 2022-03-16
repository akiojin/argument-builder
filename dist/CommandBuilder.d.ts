export default class CommandBuilder {
    args: string[];
    AddCommand(command: string): void;
    AddCommand(command: string, param: string): void;
    AddCommand(commands: string[]): void;
    Build(): string[];
}
