export default function serializeOnlyGetters(obj) {
  const proto = Object.getPrototypeOf(obj);
  const jsonObj: any = {};

  Object.entries(Object.getOwnPropertyDescriptors(proto))
    .filter(([key, descriptor]) => typeof descriptor.get === 'function')
    .map(([key, descriptor]) => {
      if (descriptor && key[0] !== '_') {
        try {
          const val = (obj as any)[key];
          jsonObj[key] = val;
        } catch (error) {
          console.error(`Error calling getter ${key}`, error);
        }
      }
    });

  return jsonObj;
}
