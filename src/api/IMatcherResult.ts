import {IPattern} from './IPattern'

/**
 * Describes a result of an matcher's match.
 */
export interface IMatcherResult {
  /**
   * If the matcher had matching patterns.
   */
  matches(): boolean

  /**
   * The matched pattern.
   */
  getPattern(): IPattern
}
