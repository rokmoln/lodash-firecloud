import _ from 'lodash';

/**
 * Part of `lodash-firecloud`.
 *
 * Same as _.merge but don't merge arrays. Just override them.
 *
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @returns {Object} Returns object.
 */
export let mergeWithoutArrays = function(object, ...sources) {
  return _.mergeWith(object, ...sources, function(_objValue, srcValue) {
    // treat arrays as primitives, don't deep merge
    if (_.isArray(srcValue)) {
      return srcValue;
    }
  });
};
