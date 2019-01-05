import {IMatcherResult} from './api/IMatcherResult'
import {IModifiableMatcher} from './api/IModifiableMatcher'
import {IPattern} from './api/IPattern'
import {SimpleDomainMatcherResult} from './SimpleDomainMatcherResult'

export class MultiDomainMatcher implements IModifiableMatcher {
  private patterns: IPattern[] = []

  public match(input: string): IMatcherResult {
    const stripped = this.strip(input)
    if (stripped === null)
      throw new Error('Input "' + input + '" invalid')

    let matchingPattern: IPattern = null
    this.patterns.forEach((pattern) => {
      if (pattern.getPattern().test(stripped))
        matchingPattern = pattern
    })

    if (matchingPattern === null)
      return new SimpleDomainMatcherResult(false, null)
    else
      return new SimpleDomainMatcherResult(true, matchingPattern)
  }

  private strip(input: string): string {
    const regexp = /^(https?:\/\/)?([^/]*)(\/?)/gm
    const ex = regexp.exec(input)
    if (ex === null)
      return null

    return ex[2]
  }

  public registerPattern(pattern: IPattern): void {
    this.patterns.push(pattern)
  }
}
