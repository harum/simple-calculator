import { version } from '../package.json';
import add from './add.js';
import subtract from './subtract.js';

export function getVersion() {
  console.log('version ' + version);
}

export { add, subtract };

export const myCalculator = {
  add,
  subtract,
  getVersion,
};

export default myCalculator;
