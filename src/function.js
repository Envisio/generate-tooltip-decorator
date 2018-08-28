export default function ({ shared, chartType }) {
  if (shared !== false) {
    throw new Error('generateTooltipDecorator does not support shared tooltip yet.');
  }
  return function generateTooltipDecorator() {
    const {
      series: { data, options: { displayData = [], toolTipComments = [] } }, percentage, key, x, point,
    } = this;
    const index = data.indexOf(point);
    if (chartType === 'pie') {
      if (toolTipComments[index] === undefined) {
        return `<span>${key}<br />${displayData[index]} - ${percentage.toFixed(2)}%</span>`;
      }
      return `<span>${key}<br />${displayData[index]} - ${percentage.toFixed(2)}%<br />${toolTipComments[index].replace(/\n/g, '<br />')}</span>`;
    }

    if (toolTipComments[index] === undefined) {
      return `<span>${x}<br />${displayData[index]}</span>`;
    }

    let comment;
    if (toolTipComments[index].includes('\n')) {
      comment = toolTipComments[index].replace(/\n/g, ' <br /> ');
      return `<span>${x}<br />${displayData[index]}<br />${comment}</span>`;
    }
    if (toolTipComments[index].includes('rc-widget-tooltip-comment') && toolTipComments[index].includes('<br />')) {
      comment = toolTipComments[index].replace(/<br ?\/?>/g, '');
      const regex = /<span class="rc-widget-tooltip-comment">(.*)<\/span>/;
      comment = comment
        .replace(regex, '$1')
        .match(/([^\s]*\s[^\s]*){0,20}/g).join(' <br /> ');
      return `<span>${x}<br />${displayData[index]}<br />${comment}</span>`;
    }
    comment = toolTipComments[index].match(/([^\s]*\s[^\s]*){0,20}/g).join(' <br /> ');
    return `<span>${x}<br />${displayData[index]}<br />${comment}</span>`;
  };
}
