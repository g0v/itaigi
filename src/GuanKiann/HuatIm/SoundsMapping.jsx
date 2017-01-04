import React from 'react';
import unorm from 'unorm';
import old_mapping from './oldMapping.json';

var mapping = {};
for (var key in old_mapping) {
  mapping[unorm.nfc(key)] = old_mapping[key];
}

export default class SoundsMapping  {
  static map(k) {
    return mapping[k.split('/')[0]];
  }
}
