/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internal/baseIndexOf', '../lang/isArray', '../internal/isLength', '../lang/isString', '../object/values'], function(baseIndexOf, isArray, isLength, isString, values) {

  /* Native method references for those with the same name as other `lodash` methods */
  var nativeMax = Math.max;

  /**
   * Checks if `value` is present in `collection` using `SameValueZero` for
   * equality comparisons. If `fromIndex` is negative, it is used as the offset
   * from the end of the collection.
   *
   * **Note:** `SameValueZero` comparisons are like strict equality comparisons,
   * e.g. `===`, except that `NaN` matches `NaN`. See the
   * [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
   * for more details.
   *
   * @static
   * @memberOf _
   * @alias include
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {*} target The value to check for.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {boolean} Returns `true` if a matching element is found, else `false`.
   * @example
   *
   * _.contains([1, 2, 3], 1);
   * // => true
   *
   * _.contains([1, 2, 3], 1, 2);
   * // => false
   *
   * _.contains({ 'user': 'fred', 'age': 40 }, 'fred');
   * // => true
   *
   * _.contains('pebbles', 'eb');
   * // => true
   */
  function contains(collection, target, fromIndex) {
    var length = collection ? collection.length : 0;

    if (!isLength(length)) {
      collection = values(collection);
      length = collection.length;
    }
    if (!length) {
      return false;
    }
    if (typeof fromIndex == 'number') {
      fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
    } else {
      fromIndex = 0;
    }
    return (typeof collection == 'string' || !isArray(collection) && isString(collection))
      ? (fromIndex < length && collection.indexOf(target, fromIndex) > -1)
      : (baseIndexOf(collection, target, fromIndex) > -1);
  }

  return contains;
});
