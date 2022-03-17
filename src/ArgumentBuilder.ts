export default class ArgumentBuilder
{
	#args: string[] = []

	Append(arg: string): void
	Append(arg: string, param: string): void
	Append(args: string[]): void

	Append(arg: string | string[], param?: string): void
	{
		if (Array.isArray(arg)) {
			this.#args = this.#args.concat(arg)
		} else {
			this.#args.push(arg)

			if (param != null) {
				this.#args.push(arg)
			}
		}
	}

	Count(): number
	{
		return this.#args.length
	}

	Build(): string[]
	{
		return this.#args
	}

	ToString(): string
	{
		return this.#args.join(' ')
	}
}
