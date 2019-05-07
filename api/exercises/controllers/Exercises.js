'use strict';

/**
 * Exercises.js controller
 *
 * @description: A set of functions called "actions" for managing `Exercises`.
 */

module.exports = {

  /**
   * Retrieve exercises records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.exercises.search(ctx.query);
    } else {
      return strapi.services.exercises.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a exercises record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.exercises.fetch(ctx.params);
  },

  /**
   * Count exercises records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.exercises.count(ctx.query);
  },

  /**
   * Create a/an exercises record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.exercises.add(ctx.request.body);
  },

  /**
   * Update a/an exercises record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.exercises.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an exercises record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.exercises.remove(ctx.params);
  }
};
