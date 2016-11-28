const expect = require('chai').expect
const path = require('path')
let lib = require('../package.json').main
lib = require(path.resolve(__dirname, '..', lib))

describe('abbreviateLastname()', function() {
  it('be an function', () => {
    expect(lib).to.be.a('function')
  })

  it('short names (Darlan Mendonça)', () => {
    expect(lib('Darlan Mendonça')).to.be.equal('Darlan Mendonça')
  })

  it('little names (Darlan M. de Almeida)', () => {
    expect(lib('Darlan Mendonça de Almeida')).to.be.equal('Darlan M. de Almeida')
  })

  it('medium names (Darlan M. de O. Almeida)', () => {
    expect(lib('Darlan Mendonça de Oliveira Almeida')).to.be.equal('Darlan M. de O. Almeida')
  })

  it('setting number of lastnames (Darlan M. de Oliveira Almeida)', () => {
    expect(lib('Darlan Mendonça de Oliveira Almeida', 2)).to.be.equal('Darlan M. de Oliveira Almeida')
  })
})