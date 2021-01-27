import accents from 'remove-accents'

export const filter = (data: Array<any>, term: string, fields: Array<string>): Array<any> => {
  if (term && term.length) {
    const result = data?.filter(row => {
      let found = false;

      fields.forEach(field => {
        const fieldValue = getFieldValue(row, field);
        const value = !!fieldValue ? accents.remove(fieldValue.toString().toLowerCase()) : '';
        const search = !!term ? accents.remove(term.toLocaleLowerCase()) : '';

        if (value.includes(search)) {
          found = true;
        }
      })

      return found;
    });

    return result;
  }
  return data;
}

function getFieldValue(value: [], field: string) {
  const nested = field.split('.');
  if (nested.length <= 1) return value[field];

  let current = value;

  for (let x: number = 0; x <= nested.length; x++) {
    const key = nested[x];
    if (typeof current[key] !== 'object') {
      return current[key];
    }
    current = current[key];
  }
}