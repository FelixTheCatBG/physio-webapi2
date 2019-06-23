'use strict';

/**
 * Illnessbank.js controller
 *
 * @description: A set of functions called "actions" for managing `Illnessbank`.
 */

module.exports = {

  /**
   * Retrieve illnessbank records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.illnessbank.search(ctx.query);
    } else {
      return strapi.services.illnessbank.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a illnessbank record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.illnessbank.fetch(ctx.params);
  },

  /**
   * Count illnessbank records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.illnessbank.count(ctx.query);
  },

  /**
   * Create a/an illnessbank record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.illnessbank.add(ctx.request.body);
  },

  /**
   * Update a/an illnessbank record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.illnessbank.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an illnessbank record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.illnessbank.remove(ctx.params);
  }
};
