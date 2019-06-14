'use strict';

/**
 * Physiotherapists.js controller
 *
 * @description: A set of functions called "actions" for managing `Physiotherapists`.
 */

module.exports = {

  /**
   * Retrieve physiotherapists records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.physiotherapists.search(ctx.query);
    } else {
      return strapi.services.physiotherapists.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a physiotherapists record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.physiotherapists.fetch(ctx.params);
  },

  /**
   * Count physiotherapists records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.physiotherapists.count(ctx.query);
  },

  /**
   * Create a/an physiotherapists record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.physiotherapists.add(ctx.request.body);
  },

  /**
   * Update a/an physiotherapists record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.physiotherapists.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an physiotherapists record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.physiotherapists.remove(ctx.params);
  }
};
