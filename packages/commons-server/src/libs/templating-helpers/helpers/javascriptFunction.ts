import { PluginManager } from 'live-plugin-manager';

const manager = new PluginManager();

const javascriptFunction = function (fnString, ...args: any[]) {
    // eslint-disable-next-line no-eval
    return eval('(' + fnString + ')')(...args);
  };
export default javascriptFunction;
