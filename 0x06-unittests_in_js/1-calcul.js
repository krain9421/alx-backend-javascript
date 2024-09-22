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
      if (rndB == 0) {
        return 'Error';
	break;
      }
      else {
        return rndA / rndB;
	break;
      }
    default:
      return 'Error';
}

}

module.exports = calculateNumber;
