"use strict";

/**
 * Функция возвращает объект, у которого поля перечислены в keys.
 * Если такого поля нет, то оно игнорируется.
 * @param {Object} obj - объект
 * @param {Array<String | Number>} keys - список ключей (полей).
 * @returns {Object} объект, содержащий только поля из keys
 * 
 * @example
 * const obj = {
    "key1": 1,
    "key2": 2,
    "key3": 3,
    "key4": 4,
    "key5": 5,
    "key_string": "any_string"
    };
    const new_obj = filterObjectByKeys(obj, ["key1", "key_string", "key3", "not_exists_key"]);

    // new_obj = {"key1": 1, "key_string": "any_string", "key3": 3}
*/
function filterObjectByKeys(obj, keys)
{
    if (typeof obj !== "object" || obj === null)
    {
        return {};
    }
    if (!Array.isArray(keys))
    {
        return {};
    }
    let new_obj = {};
    keys.forEach((key) => {
        if (obj.hasOwnProperty(key))
        {
            new_obj[key] = structuredClone(obj[key]);
        }
    });

    return new_obj;
}
