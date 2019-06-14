'use strict';

/**
 * Exercisediary.js controller
 *
 * @description: A set of functions called "actions" for managing `Exercisediary`.
 */

module.exports = {

  /**
   * Retrieve exercisediary records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.exercisediary.search(ctx.query);
    } else {
      return strapi.services.exercisediary.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a exercisediary record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.exercisediary.fetch(ctx.params);
  },

  /**
   * Count exercisediary records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.exercisediary.count(ctx.query);
  },

  /**
   * Create a/an exercisediary record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.exercisediary.add(ctx.request.body);
  },

  /**
   * Update a/an exercisediary record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.exercisediary.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an exercisediary record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.exercisediary.remove(ctx.params);
  }
};
