import {IMatcher} from './IMatcher'
import {IPattern} from './IPattern'

/**
 * Describes a matcher which accepts new patterns.
 */
export interface IModifiableMatcher extends IMatcher {
  /**
   * Adds the given pattern to the matcher.
   *
   * @param pattern to add to the matcher.
   */
  registerPattern(pattern: IPattern): void
}
