import {expect} from 'chai'
import {MultiDomainMatcher} from '../src/MultiDomainMatcher'
import {SimpleDomainPattern} from '../src/SimpleDomainPattern'

describe('MultiDomainMatcher.ts', () => {
  it('should match through multiple patterns', () => {
    const matcher = new MultiDomainMatcher()

    const pattern01 = new SimpleDomainPattern('*.auritylab.com')
    const pattern02 = new SimpleDomainPattern('*.test.com')

    matcher.registerPattern(pattern01)
    matcher.registerPattern(pattern02)

    const matchResult01 = matcher.match('test.auritylab.com')
    expect(matchResult01.matches()).to.be.true
    expect(matchResult01.getPattern()).to.equal(pattern01)

    const matchResult02 = matcher.match('test.test.com')
    expect(matchResult02.matches()).to.be.true
    expect(matchResult02.getPattern()).to.equal(pattern02)
  })

  it ('should match single pattern', () => {
    const matcher = new MultiDomainMatcher()

    const pattern = new SimpleDomainPattern('*.auritylab.com')
    matcher.registerPattern(pattern)

    const matchResult = matcher.match('test.auritylab.com')
    expect(matchResult.matches()).to.be.true
    expect(matchResult.getPattern()).to.equal(pattern)
  })

})
