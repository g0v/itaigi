import React from 'react';
import mapping from './mapping.json';

export default class SoundsMapping  {
  static map(k) {
    return mapping[k.split('/')[0]];
  }
}
