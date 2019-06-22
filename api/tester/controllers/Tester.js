'use strict';

/**
 * Tester.js controller
 *
 * @description: A set of functions called "actions" for managing `Tester`.
 */

module.exports = {

  /**
   * Retrieve tester records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.tester.search(ctx.query);
    } else {
      return strapi.services.tester.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a tester record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tester.fetch(ctx.params);
  },

  /**
   * Count tester records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tester.count(ctx.query);
  },

  /**
   * Create a/an tester record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tester.add(ctx.request.body);
  },

  /**
   * Update a/an tester record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tester.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tester record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tester.remove(ctx.params);
  }
};
