'use strict';

/**
 * Patients.js controller
 *
 * @description: A set of functions called "actions" for managing `Patients`.
 */

module.exports = {

  /**
   * Retrieve patients records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.patients.search(ctx.query);
    } else {
      return strapi.services.patients.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a patients record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.patients.fetch(ctx.params);
  },

  /**
   * Count patients records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.patients.count(ctx.query);
  },

  /**
   * Create a/an patients record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.patients.add(ctx.request.body);
  },

  /**
   * Update a/an patients record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.patients.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an patients record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.patients.remove(ctx.params);
  }
};
