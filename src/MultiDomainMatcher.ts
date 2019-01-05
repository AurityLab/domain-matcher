import {IMatcherResult} from './api/IMatcherResult'
import {IModifiableMatcher} from './api/IModifiableMatcher'
import {IPattern} from './api/IPattern'
import {SimpleDomainMatcherResult} from './SimpleDomainMatcherResult'

export class MultiDomainMatcher implements IModifiableMatcher {
  private patterns: IPattern[] = []

  public match(input: string): IMatcherResult {
    let matchingPattern: IPattern = null
    this.patterns.forEach((pattern) => {
      if (pattern.getPattern().test(input))
        matchingPattern = pattern
    })

    if (matchingPattern === null)
      return new SimpleDomainMatcherResult(false, null)
    else
      return new SimpleDomainMatcherResult(true, matchingPattern)
  }

  public registerPattern(pattern: IPattern): void {
    this.patterns.push(pattern)
  }
}
