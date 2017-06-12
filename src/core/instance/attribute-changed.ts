import { HostElement, PlatformApi } from '../../util/interfaces';
import { parsePropertyValue } from '../../util/data-parse';


export function attributeChangedCallback(plt: PlatformApi, elm: HostElement, attribName: string, oldVal: string, newVal: string) {
  // only react if the attribute values actually changed
  if (oldVal !== newVal) {

    // normalize the attribute name w/ lower case
    attribName = attribName.toLowerCase();

    // using the known component meta data
    // look up to see if we have a property wired up to this attribute name
    const prop = plt.getComponentMeta(elm).propsMeta.find(p => p.attribName === attribName);

    if (prop) {
      // cool we've got a prop using this attribute name the value will
      // be a string, so let's convert it to the correct type the app wants
      // below code is ugly yes, but great minification ;)
      (<any>elm)[prop.propName] = parsePropertyValue(prop.propType, newVal);
    }
  }
}