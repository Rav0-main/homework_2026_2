"use strict";

/**
 * Функция возвращает объект, у которого поля перечислены в keys.
 * Если такого поля нет, то оно игнорируется.
 * Копирование полей происходит с помощью structuredClone.
 * Если поле невозможно скопировать, сохраняется ссылка на этот объект.
 * При несоответствии типов входных данных, вернется пустой объект {}.
 * @param {Object} obj - объект
 * @param {Array<String | Number>} keys - список ключей (полей).
 * @returns {Object} объект, содержащий только поля из keys
 * 
 * @example
 * const obj = {
 *  "key1": 1,
 *  "key2": 2,
 *  "key3": 3,
 *  "key4": 4,
 *  "key5": 5,
 *  "key_string": "any_string"
 *  };
 *  const filteredObj = filterObjectByKeys(obj, ["key1", "key_string", "key3", "not_exists_key"]);
 *
 *  // filteredObj = {"key1": 1, "key_string": "any_string", "key3": 3}
*/
function filterObjectByKeys(obj, keys) {
    if (typeof obj !== "object") {
        return {};
    } else if (!Array.isArray(keys)) {
        return {};
    }
    const filteredObj = {};
    keys.forEach((key) => {
        if (key in obj) {
            try {
                filteredObj[key] = structuredClone(obj[key]);
            } catch (err) {
                if (err.name !== "DataCloneError") {
                    throw err;
                }
                // Если поле не копируемо, то сохраняем ссылку
                filteredObj[key] = obj[key];
            }
        }
    });

    return filteredObj;
}