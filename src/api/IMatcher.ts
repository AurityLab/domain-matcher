import {IMatcherResult} from './IMatcherResult'

/**
 * Describes a matcher which has patterns
 * registered and accepts a input string to
 * test the patterns against.
 */
export interface IMatcher {
  /**
   * Tests the given input against the registered
   * patterns in this matcher.
   *
   * @param input to test against the patterns.
   * @return Matcher result, which will never
   * be null/undefined.
   */
  match(input: string): IMatcherResult
}
