
var expect = require('chai').expect
var lib = require('../package.json').main
var path = require('path')
lib = require(path.resolve(__dirname, '..', lib))

describe('abreviate-names', function() {
  it('export a function', function() {
    expect(lib).to.be.a('function')
  })

  it('abreviate little names (Darlan M. de Almeida)', function() {
    expect(lib('Darlan Mendonça de Almeida')).to.be.equal('Darlan M. de Almeida')
  })

  it('abreviate medium names (Darlan M. de O. Almeida)', function() {
    expect(lib('Darlan Mendonça de Oliveira Almeida')).to.be.equal('Darlan M. de O. Almeida')
  })
})