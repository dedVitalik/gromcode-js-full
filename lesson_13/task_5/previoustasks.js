export const reverseArray = (arrToReverse) => {
    if (!Array.isArray(arrToReverse)) return null;
    return [...arrToReverse].reverse();
}

export const withdraw = (clients, balances, client, amount) => {
    return balances[clients.indexOf(client)] - amount < 0 ? -1 : balances[clients.indexOf(client)] - amount;
}

export const getAdults = obj => {
  const filteredObj = {};
  for (let key in obj) {
    if (obj[key] > 17) filteredObj[key] = obj[key]}
  return filteredObj;
};