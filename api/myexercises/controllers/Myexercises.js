'use strict';

/**
 * Myexercises.js controller
 *
 * @description: A set of functions called "actions" for managing `Myexercises`.
 */

module.exports = {

  /**
   * Retrieve myexercises records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.myexercises.search(ctx.query);
    } else {
      return strapi.services.myexercises.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a myexercises record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.myexercises.fetch(ctx.params);
  },

  /**
   * Count myexercises records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.myexercises.count(ctx.query);
  },

  /**
   * Create a/an myexercises record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.myexercises.add(ctx.request.body);
  },

  /**
   * Update a/an myexercises record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.myexercises.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an myexercises record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.myexercises.remove(ctx.params);
  }
};
