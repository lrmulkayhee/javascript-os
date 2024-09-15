function load(os, value) {
    os.registers.acc = value;
}

function store(os, address) {
    os.memory[address] = os.registers.acc;
}

function add(os, value) {
    os.registers.acc += value;
}

function sub(os, value) {
    os.registers.acc -= value;
}

function mul(os, value) {
    os.registers.acc *= value;
}

function div(os, value) {
    if (value !== 0) {
        os.registers.acc /= value;
    } else {
        console.log('Error: Division by zero');
    }
}

function print(os) {
    console.log(os.registers.acc);
}

function clear(os) {
    os.registers.acc = 0;
}

module.exports = { load, store, add, sub, mul, div, print, clear };