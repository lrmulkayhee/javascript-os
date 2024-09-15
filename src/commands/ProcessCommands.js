const Process = require('../os/Process');

function createProcess(os, instructions) {
    const pid = os.currentPid++;
    const process = new Process(pid, instructions);
    os.processes.push(process);
    console.log(`Process ${pid} created.`);
}

function runProcess(os, pid) {
    const process = os.processes.find((p) => p.pid === pid);
    if (process) {
        process.state = 'running';
        while (process.instructionPointer < process.instructions.length) {
            const command = process.instructions[process.instructionPointer];
            os.run(command);
            process.instructionPointer++;
        }
        process.state = 'terminated';
        console.log(`Process ${pid} terminated.`);
    } else {
        console.log(`Process ${pid} not found.`);
    }
}

function terminateProcess(os, pid) {
    const process = os.processes.find((p) => p.pid === pid);
    if (process) {
        process.state = 'terminated';
        console.log(`Process ${pid} terminated.`);
    } else {
        console.log(`Process ${pid} not found.`);
    }
}

module.exports = { createProcess, runProcess, terminateProcess };