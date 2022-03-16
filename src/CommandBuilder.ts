export default class CommandBuilder
{
    args: string[] = []

    AddCommand(command: string): void
    AddCommand(command: string, param: string): void
    AddCommand(commands: string[]): void

    AddCommand(command: string | string[], param?: string): void
    {
        if (Array.isArray(command)) {
            this.args = this.args.concat(command)
        } else {
            this.args.push(command)

            if (param != null) {
                this.args.push(param)
            }
        }
    }

    Build(): string[]
    {
        return this.args
    }
}
