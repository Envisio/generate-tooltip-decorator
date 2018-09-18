'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var shared = _ref.shared,
      chartType = _ref.chartType;

  if (shared !== false) {
    throw new Error('generateTooltipDecorator does not support shared tooltip yet.');
  }
  return function generateTooltipDecorator() {
    var _series = this.series,
        data = _series.data,
        _series$options = _series.options,
        _series$options$displ = _series$options.displayData,
        displayData = _series$options$displ === undefined ? [] : _series$options$displ,
        _series$options$toolT = _series$options.toolTipComments,
        toolTipComments = _series$options$toolT === undefined ? [] : _series$options$toolT,
        percentage = this.percentage,
        key = this.key,
        x = this.x,
        point = this.point;

    var index = data.indexOf(point);
    if (chartType === 'pie') {
      if (toolTipComments[index] === '') {
        return '<span>' + key + '<br />' + displayData[index] + ' - ' + percentage.toFixed(2) + '%</span>';
      }
      return '<span>' + key + '<br />' + displayData[index] + ' - ' + percentage.toFixed(2) + '%<br />' + toolTipComments[index].replace(/\n/g, '<br />') + '</span>';
    }

    if (toolTipComments[index] === '') {
      return '<span>' + x + '<br />' + displayData[index] + '</span>';
    }

    var comment = void 0;
    if (toolTipComments[index].includes('\n')) {
      comment = toolTipComments[index].replace(/\n/g, ' <br /> ');
      return '<span>' + x + '<br />' + displayData[index] + '<br />' + comment + '</span>';
    }
    if (toolTipComments[index].includes('rc-widget-tooltip-comment') && toolTipComments[index].includes('<br />')) {
      comment = toolTipComments[index].replace(/<br ?\/?>/g, '');
      var regex = /<span class="rc-widget-tooltip-comment">(.*)<\/span>/;
      comment = comment.replace(regex, '$1');
      comment = comment.match(/([^\s]*\s[^\s]*){0,20}/g).join(' <br /> ');
      return '<span>' + x + '<br />' + displayData[index] + '<br />' + comment + '</span>';
    }
    if (toolTipComments[index].match(/\w+/g).length === 1) {
      return '<span>' + x + '<br />' + displayData[index] + '<br />' + toolTipComments[index] + '</span>';
    }
    comment = toolTipComments[index].match(/([^\s]*\s[^\s]*){0,20}/g).join(' <br /> ');
    return '<span>' + x + '<br />' + displayData[index] + '<br />' + comment + '</span>';
  };
};
//# sourceMappingURL=index.js.map