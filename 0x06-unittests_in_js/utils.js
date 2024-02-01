const Utils = {
  calculateNumber(type, a, b) {
    let result;
    switch (type) {
        case 'SUM': result = Math.round(a) + Math.round(b); break;
        case 'SUBTRACT': result = Math.round(a) - Math.round(b); break;
        case 'DIVIDE': result = Math.round(b) !== 0 ? (Math.round(a) / Math.round(b)) : 'Error'; break;
        default: return 'Unknown type';
    }
    return result;
  }
};

module.exports = Utils;