'use strict';

var Envisio = Envisio || {};
Envisio.generateTooltipDecorator = Envisio.generateTooltipDecorator || function (_ref) {
  var shared = _ref.shared,
      chartType = _ref.chartType;

  if (shared !== false) {
    throw new Error('generateTooltipDecorator does not support shared tooltip yet.');
  }
  return function generateTooltipDecorator() {
    var _series = this.series,
        data = _series.data,
        displayData = _series.options.displayData,
        percentage = this.percentage,
        key = this.key,
        x = this.x,
        point = this.point;

    var index = data.indexOf(point);
    if (chartType === 'pie') {
      return key + '<br />' + displayData[index] + ' - ' + percentage.toFixed(2) + '%';
    }
    return x + '<br />' + displayData[index];
  };
};
//# sourceMappingURL=function.js.map