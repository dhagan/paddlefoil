'use strict';

/**
 * Module dependencies
 */
var contactusPolicy = require('../policies/contactus.server.policy'),
  contactus = require('../controllers/contactus.server.controller');

module.exports = function(app) {
  // Contactus Routes
  app.route('/api/contactus').all(contactusPolicy.isAllowed)
    .get(contactus.list)
    .post(contactus.create);

  app.route('/api/contactus/:contactuId').all(contactusPolicy.isAllowed)
    .get(contactus.read)
    .put(contactus.update)
    .delete(contactus.delete);

  // Finish by binding the Contactu middleware
  app.param('contactuId', contactus.contactuByID);
};
