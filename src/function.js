function generateTooltipDecoratorFunc(args) {
  const { shared, chartType } = args;
  // TODO: Boys, enabled shared tooltip by calling generateTooltipDecorator(true)
  // and set `shared: true` on `tooltip` at the caller level
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
}
