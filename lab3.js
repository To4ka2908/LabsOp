'use strict'


//task 1


const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    };
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(3,33));
console.log(random(33));



// task 2


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=+_';

const generateKey = (length, characters) => {
    let randomChar = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        randomChar += characters[index]; 
    }
    return randomChar;
};

console.log(generateKey(16, characters));
console.log(generateKey(10, characters));


// task 3


const ipToInt = (ip = '127.0.0.1') => {
  const octets = ip.split('.');
  const shiftAdd = (acc, octet) => (acc << 8) + parseInt(octet, 10);
  return octets.reduce(shiftAdd, 0);
};

console.log(ipToInt());
console.log(ipToInt('10.0.0.1'));


//task 4

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
}

const zxc = (iface) => {
  const names = [];
  for (const name in iface) {
    const face = iface[name];
    if (typeof face === 'function') {
      names.push([name, face.length]);
    }
  }
  return names;
};

console.table(zxc(iface));