export default function ({ shared, chartType }) {
  // TODO: Boys, enabled shared tooltip by calling generateTooltipDecorator(true)
  // and set `shared: true` on `tooltip` at the caller level
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
      return `<span>${key}<br />${displayData[index]} - ${percentage.toFixed(2)}%<br />${toolTipComments[index]}</span>`;
    }
    if (toolTipComments[index] === undefined) {
      return `<span>${x}<br />${displayData[index]}</span>`;
    }
    return `<span>${x}<br />${displayData[index]}<br />${toolTipComments[index]}</span>`;
  };
}
