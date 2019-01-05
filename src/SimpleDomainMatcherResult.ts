import {IMatcherResult} from './api/IMatcherResult'
import {IPattern} from './api/IPattern'

export class SimpleDomainMatcherResult implements IMatcherResult {
  private readonly _matches: boolean
  private readonly _pattern: IPattern

  constructor(matches: boolean, pattern: IPattern) {
    this._matches = matches
    this._pattern = pattern
  }

  public getPattern(): IPattern {
    return this._pattern
  }

  public matches(): boolean {
    return this._matches
  }
}
