/**
 * Represents the pattern to match.
 *
 * A pattern can look like the following:
 * - "*.auritylab.com"
 * - "*.test.auritylab.com"
 * - "test.*.*auritylab.com"
 */
import {IPattern} from './api/IPattern'
import {InvalidPattern} from './error/InvalidPattern'

export class SimpleDomainPattern implements IPattern {
  private readonly pattern: RegExp

  constructor(pattern: string) {
    this.pattern = new RegExp(this.transformPattern(pattern))
  }

  public getPattern(): RegExp {
    return this.pattern
  }

  private transformPattern(pattern: string): string {
    return '^' + pattern.replace(/\*/gm, '([^.]+)') + '$'
  }

  private validatePattern(pattern: string): InvalidPattern {
    const validationRegex = /^([^.]+)(\.([^.]+))+$/gm

    validationRegex.test(pattern)

    return null
  }
}
