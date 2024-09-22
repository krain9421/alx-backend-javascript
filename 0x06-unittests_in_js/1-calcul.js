function calculateNumber(type, a, b) {
  const rndA = Math.round(a);
  const rndB = Math.round(b);

  switch (type) {
    case 'SUM':
      return rndA + rndB;  
      break;
    case 'SUBTRACT':
        return rndA - rndB;
        break;
    case 'DIVIDE':
      if (rndB == 0):
        return 'Error';
      else:
        return rndA / rndB;
    default:
      return 'Error';
}

}

module.exports = calculateNumber;
