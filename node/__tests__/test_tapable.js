const Car = require('../tapable/Car');

test('tapable', () => {
    const myCar = new Car();
    myCar.hooks.break.tap('WarningLampPlugin', () => {});
    myCar.hooks.accelerate.tap('LoggerPlugin', newSpeed => console.log(`Accelerating to ${newSpeed}`));
    myCar.setSpeed(100);
});
