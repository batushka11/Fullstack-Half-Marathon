function Avenger(value) {
  let Avenger = () => [
    value.alias.toUpperCase(),
    value.powers.join('\n')
  ].join('\n');

  Avenger.toString = () => [
    `name: ${value.name}`,
    `gender: ${value.gender}`,
    `age: ${value.age}`
  ].join('\n');

 return Avenger;
}
module.exports.Avenger = Avenger;