function getObjByKey(obj, path, defaultValue) {

    if (obj == null) return defaultValue;
    const keys = Array.isArray(path) ? path : path.split('.');

    const result = keys.reduce((acc, key) => {
        return (acc == null) ? undefined : acc[key];
    }, obj);

    return result === undefined ? defaultValue : result;

}

console.log(getObjByKey({ a: { b: { c: null } } }, 'a.b.c', 0))