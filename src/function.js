const Envisio = Envisio || {};
Envisio.generateTooltipDecorator = Envisio.generateTooltipDecorator || function ({ shared, chartType }) {
  if (shared !== false) {
    throw new Error('generateTooltipDecorator does not support shared tooltip yet.');
  }
  return function generateTooltipDecorator() {
    const {
      series: { data, options: { displayData } }, percentage, key, x, point,
    } = this;
    const index = data.indexOf(point);
    if (chartType === 'pie') {
      return `${key}<br />${displayData[index]} - ${percentage.toFixed(2)}%`;
    }
    return `${x}<br />${displayData[index]}`;
  };
};
