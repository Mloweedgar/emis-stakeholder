'use strict';


/* dependencies */
const path = require('path');
const _ = require('lodash');
const { expect } = require('chai');
const { Party } = require(path.join(__dirname, '..', '..'));

describe('Party Seed', () => {

  const SEEDS_PATH = process.env.SEEDS_PATH;

  before((done) => {
    Party.deleteMany(done);
  });

  before(() => {
    process.env.SEEDS_PATH = path.join(__dirname, '..', 'fixtures');
  });

  it('should be able to seed from environment', (done) => {
    Party.seed((error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      expect(_.find(seeded, { name: 'John Doe' })).to.exist;
      done(error, seeded);
    });
  });

  it('should not throw if seed from environment exist', (done) => {
    Party.seed((error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      expect(_.find(seeded, { name: 'John Doe' })).to.exist;
      done(error, seeded);
    });
  });

  after((done) => {
    Party.deleteMany(done);
  });

  after(() => {
    process.env.SEEDS_PATH = SEEDS_PATH;
  });

});
