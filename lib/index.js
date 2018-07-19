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
        _series$options = _series.options,
        displayData = _series$options.displayData,
        toolTipComments = _series$options.toolTipComments,
        percentage = this.percentage,
        key = this.key,
        x = this.x,
        point = this.point;

    var index = data.indexOf(point);
    if (chartType === 'pie') {
      if (toolTipComments[index] === undefined) {
        return '<span>' + key + '<br />' + displayData[index] + ' - ' + percentage.toFixed(2) + '%</span>';
      }
      if (toolTipComments[index].length > 175) {
        return '<span>' + key + '<br />' + displayData[index] + ' - ' + percentage.toFixed(2) + '%<br />' + toolTipComments[index].substring(0, 172) + '...</span>';
      }
      return '<span>' + key + '<br />' + displayData[index] + ' - ' + percentage.toFixed(2) + '%<br />' + toolTipComments[index] + '</span>';
    }
    if (toolTipComments[index] === undefined) {
      return '<span>' + x + '<br />' + displayData[index] + '</span>';
    }
    if (toolTipComments[index].length > 175) {
      return '<span>' + x + '<br />' + displayData[index] + '<br />' + toolTipComments[index].substring(0, 172) + '...</span>';
    }
    return '<span>' + x + '<br />' + displayData[index] + '<br />' + toolTipComments[index] + '</span>';
  };
};
//# sourceMappingURL=index.js.map