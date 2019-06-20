'use strict';

/**
 * Exercisedailydiary.js controller
 *
 * @description: A set of functions called "actions" for managing `Exercisedailydiary`.
 */

module.exports = {

  /**
   * Retrieve exercisedailydiary records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.exercisedailydiary.search(ctx.query);
    } else {
      return strapi.services.exercisedailydiary.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a exercisedailydiary record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.exercisedailydiary.fetch(ctx.params);
  },

  /**
   * Count exercisedailydiary records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.exercisedailydiary.count(ctx.query);
  },

  /**
   * Create a/an exercisedailydiary record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.exercisedailydiary.add(ctx.request.body);
  },

  /**
   * Update a/an exercisedailydiary record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.exercisedailydiary.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an exercisedailydiary record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.exercisedailydiary.remove(ctx.params);
  }
};
