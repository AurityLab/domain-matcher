import {expect} from 'chai'
import {SimpleDomainPattern} from '../src/SimpleDomainPattern'

describe('', () => {
  it('should match given domain', () => {
    const pattern = new SimpleDomainPattern('*.auritylab.com')

    expect(pattern.getPattern().test('www.auritylab.com')).to.be.true
    expect(pattern.getPattern().test('auritylab.com')).to.be.false
    expect(pattern.getPattern().test('test.www.auritylab.com')).to.be.false
  })
})
