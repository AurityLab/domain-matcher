import {MultiDomainMatcher} from './MultiDomainMatcher'
import {SimpleDomainPattern} from './SimpleDomainPattern'

/**
 * Matches the given input against the given patterns.
 *
 * @param input to match against.
 * @param patterns to match the input against.
 * @return If the given input matches on of the given patterns.
 */
export function match(input: string, ...patterns: string[]): boolean {
  const matcher = new MultiDomainMatcher()
  patterns.forEach((pattern) => {
    matcher.registerPattern(new SimpleDomainPattern(pattern))
  })

  return matcher.match(input).matches()
}

export {MultiDomainMatcher, SimpleDomainPattern}
