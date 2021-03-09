export function forEach(items: any, callback: (arg: any) => void) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
