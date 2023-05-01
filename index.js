import chalk from 'chalk';
import randomColor from 'randomColor';

const hue = process.argv[2];
const luminosity = process.argv[3];

console.log(`hue: ${hue}`);
console.log(`luminosity: ${luminosity}`);

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('#####                     #####'));
console.log(chalk.hex(color).bold(`#####        ${color}      #####`));
console.log(chalk.hex(color).bold('#####                     #####'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
