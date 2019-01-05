import {IPattern} from './api/IPattern'

/**
 * Represents the pattern to match.
 *
 * A pattern can look like the following:
 * - "*.auritylab.com"
 * - "*.test.auritylab.com"
 * - "test.*.*auritylab.com"
 */
export class SimpleDomainPattern implements IPattern {
  private readonly pattern: RegExp

  constructor(pattern: string) {
    this.validatePattern(pattern)

    this.pattern = new RegExp(this.transformPattern(pattern))
  }

  public getPattern(): RegExp {
    return this.pattern
  }

  private transformPattern(pattern: string): string {
    if (pattern === '*')
      return '^(.+)$'
    else
      return '^' + pattern.replace(/\*/gm, '([^.]+)') + '$'
  }

  private validatePattern(pattern: string): void {
    const validationRegex = /^([^.]+)(\.([^.]+))*$/gm

    if (validationRegex.test(pattern) === false)
      throw new Error('Pattern "' + pattern + '" is invalid')
  }
}
