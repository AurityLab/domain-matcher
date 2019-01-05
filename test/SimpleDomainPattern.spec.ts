import {expect} from 'chai'
import {SimpleDomainPattern} from '../src/SimpleDomainPattern'

describe('SimpleDomainPattern.ts', () => {
  it('should match simple pattern', () => {
    const pattern = new SimpleDomainPattern('*.auritylab.com').getPattern()

    expect(pattern.test('www.auritylab.com')).to.be.true
    expect(pattern.test('auritylab.com')).to.be.false
    expect(pattern.test('test.www.auritylab.com')).to.be.false
  })

  it('should match advanced pattern', () => {
    const pattern = new SimpleDomainPattern('test.*.auritylab.com').getPattern()

    expect(pattern.test('test.asdf.auritylab.com')).to.be.true
    expect(pattern.test('asdf.auritylab.com')).to.be.false
    expect(pattern.test('test.a.auritylab.com')).to.be.true
  })

  it('should match mixed pattern', () => {
    const pattern = new SimpleDomainPattern('a*.auritylab.com').getPattern()

    expect(pattern.test('asdf.auritylab.com')).to.be.true
    expect(pattern.test('bsdf.auritylab.com')).to.be.false
    expect(pattern.test('asdf.asdf.auritylab.com')).to.be.false
  })

  it('should throw exception on invalid pattern', () => {
    expect(() => {
      const pattern = new SimpleDomainPattern('.auritylab.com')
    }).to.throw()
  })

  it ('should handle global wildcard', () => {
    const pattern = new SimpleDomainPattern('*').getPattern()

    expect(pattern.test('auritylab.com')).to.be.true
    expect(pattern.test('asdf.auritylab.com')).to.be.true
    expect(pattern.test('asdf.asdf.auritylab.com')).to.be.true
  })
})
