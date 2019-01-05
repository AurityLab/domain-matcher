import {expect} from 'chai'
import {match} from '../src'

describe('index.ts', () => {
  it('should match', () => {
    expect(match('www.auritylab.com', '*.auritylab.com')).to.be.true
    expect(match('auritylab.com', 'auritylab.com')).to.be.true
    expect(match('test.auritylab.com', 'auritylab.com')).to.be.false
  })
})
