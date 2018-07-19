const Envisio = Envisio || {};
Envisio.generateTooltipDecorator = Envisio.generateTooltipDecorator || function ({ shared, chartType }) {
  if (shared !== false) {
    throw new Error('generateTooltipDecorator does not support shared tooltip yet.');
  }
  return function generateTooltipDecorator() {
    const {
      series: { data, options: { displayData, toolTipComments } }, percentage, key, x, point,
    } = this;
    const index = data.indexOf(point);
    if (chartType === 'pie') {
      if (toolTipComments[index] === undefined) {
        return `<span>${key}<br />${displayData[index]} - ${percentage.toFixed(2)}%</span>`;
      }
      if (toolTipComments[index].length > 175) {
        return `<span>${key}<br />${displayData[index]} - ${percentage.toFixed(2)}%<br />${toolTipComments[index].substring(0, 172)}...</span>`;
      }
      return `<span>${key}<br />${displayData[index]} - ${percentage.toFixed(2)}%<br />${toolTipComments[index]}</span>`;
    }
    if (toolTipComments[index] === undefined) {
      return `<span>${x}<br />${displayData[index]}</span>`;
    }
    if (toolTipComments[index].length > 175) {
      return `<span>${x}<br />${displayData[index]}<br />${toolTipComments[index].substring(0, 172)}...</span>`;
    }
    return `<span>${x}<br />${displayData[index]}<br />${toolTipComments[index]}</span>`;
  };
};
