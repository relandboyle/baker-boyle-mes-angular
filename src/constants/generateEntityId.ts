// proof of random ID gerneration method
// choose a random value from a list of all 6-digit numbers that have not yet been taken

export const GenerateNewEntityId = (entityList: string[], prefix: string): string => {
  // generate a list of all existing entityId numbers in use
  const existing = entityList.map(ent => Number(ent.split(prefix)[1]));
  // generate an array of all possible new entityId numbers
  const idPool = [];
  // iterate over all possible values
  for (let i = 100000; i < 1000000; i++) {
    // push if it does not exist
    if (!existing.includes(i)) {
      idPool.push(i);
    }
  }

  const randomIndex = Math.floor(Math.random() * idPool.length);
  const newEntityId = ''.concat(prefix, idPool[randomIndex].toString());
  return newEntityId;
}

// const existingIds = [ 'CUST-123456', 'CUST-451583', 'CUST-352579', 'CUST-321654', 'CUST-227881', 'CUST-402655' ];

// console.log(generateNewEntityId(existingIds, 'CUST-'));
