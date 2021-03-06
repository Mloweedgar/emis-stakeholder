'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Party } = require(path.join(__dirname, '..', '..'));

describe('Party Static Delete', () => {

  before((done) => {
    Party.deleteMany(done);
  });

  let party = Party.fake();

  before((done) => {
    party.post((error, created) => {
      party = created;
      done(error, created);
    });
  });

  it('should be able to delete', (done) => {
    Party.del(party._id, (error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(party._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', (done) => {
    Party.del(party._id, (error, deleted) => {
      expect(error).to.exist;
      expect(error.status).to.exist;
      expect(error.message).to.be.equal('Not Found');
      expect(deleted).to.not.exist;
      done();
    });
  });

  after((done) => {
    Party.deleteMany(done);
  });

});

describe('Party Instance Delete', () => {

  before((done) => {
    Party.deleteMany(done);
  });

  let party = Party.fake();

  before((done) => {
    party.post((error, created) => {
      party = created;
      done(error, created);
    });
  });

  it('should be able to delete', (done) => {
    party.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(party._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', (done) => {
    party.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(party._id);
      done();
    });
  });

  after((done) => {
    Party.deleteMany(done);
  });

});
