'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var shared = _ref.shared,
      chartType = _ref.chartType;

  // TODO: Boys, enabled shared tooltip by calling generateTooltipDecorator(true)
  // and set `shared: true` on `tooltip` at the caller level
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
//# sourceMappingURL=index.js.map