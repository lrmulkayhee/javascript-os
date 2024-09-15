class Process {
    constructor(pid, instructions) {
        this.pid = pid;
        this.state = 'ready';
        this.instructions = instructions;
        this.instructionPointer = 0;
    }
}

module.exports = Process;