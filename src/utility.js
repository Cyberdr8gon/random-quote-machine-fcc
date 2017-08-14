function generateColorString(color) {
  let stringified = "#" 
                 + Math.floor(color.red).toString(16)
                 + Math.floor(color.blue).toString(16) 
                 + Math.floor(color.green).toString(16);
  return {
    ...color,
    string: stringified,

  };
}

export function generatePastel() {
  let randColor = {
    red:   (Math.random() * 255),
    green: (Math.random() * 255),
    blue:   (Math.random() * 255),
  };

  let pastelizedColor = {
    red:   255 -(randColor.red + 255) / 2,
    green: 255 -(randColor.green + 255) / 2,
    blue:  255 -(randColor.blue + 255) / 2,
  };

  return generateColorString(pastelizedColor);
}

export function generateShade(color, shadePercent) {
  let shade = {
    red:   color.red * shadePercent,
    green: color.green * shadePercent,
    blue:  color.blue * shadePercent,
  }

  return generateColorString(shade);
}

function generateRelativeLuminanceShade(rgbValue) {
  let srgbValue = rgbValue / 255;

  if(srgbValue <= 0.03928) {
    return srgbValue / 12.92
  } else {
    return Math.pow(((srgbValue + 0.055) / 1.055), 2.4);
  }
}

export function generateRelativeLuminanceColor(seedColor) {
  return generateColorString({
    red: generateRelativeLuminanceShade(seedColor.red),
    green: generateRelativeLuminanceShade(seedColor.green),
    blue: generateRelativeLuminanceShade(seedColor.blue),
  });

}
