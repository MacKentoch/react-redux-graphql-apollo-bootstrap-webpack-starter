// @flow


 /**
  * Check if currently running in the browser or not
  * -> useful for server side rendering
  *
  * @returns {boolean}
  */
export function isBrowserSide(): boolean {
  return typeof window === 'object';
}

