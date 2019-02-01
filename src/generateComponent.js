'use strict';

/**
 * Creates a full component string based upon provided svg data and a component name
 * @param  string svgOutput     The svg data, preformatted
 * @param  string componentName The name of the component without extension
 * @return string               The parsed component string
 */
module.exports = (svgOutput, componentName) => `
import React from 'react';
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default function ${componentName}(props) {

  const {fill, stroke} = props;

  const shapeProps = {}
  if(fill){
    shapeProps.fill = fill;
  }
  if(stroke){
    shapeProps.stroke = stroke;
  }

  delete props.stroke;
  delete props.fill;

  return (
${svgOutput
    .split('\n')
    .map(line => `    ${line}`)
    .join('\n')}
  );
}
`;
