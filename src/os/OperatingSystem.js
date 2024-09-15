const fs = require('fs');
const path = require('path');
const Process = require('./Process');
const { load, store, add, sub, mul, div, print, clear } = require('../commands/MemoryCommands');
const { createFile, readFile, writeFile, deleteFile } = require('../commands/FileCommands');
const { createProcess, runProcess, terminateProcess } = require('../commands/ProcessCommands');

class OperatingSystem {
    constructor(memorySize) {
        this.memory = new Array(memorySize).fill(0);
        this.registers = { acc: 0 };
        this.fileSystemRoot = path.join(__dirname, '../../fs');
        if (!fs.existsSync(this.fileSystemRoot)) {
            fs.mkdirSync(this.fileSystemRoot);
        }
        this.processes = [];
        this.currentPid = 0;
    }

    run(command) {
        const [cmd, ...args] = command.split(' ');
        switch (cmd) {
            case 'load':
                load(this, parseInt(args[0], 10));
                break;
            case 'store':
                store(this, parseInt(args[0], 10));
                break;
            case 'add':
                add(this, parseInt(args[0], 10));
                break;
            case 'sub':
                sub(this, parseInt(args[0], 10));
                break;
            case 'mul':
                mul(this, parseInt(args[0], 10));
                break;
            case 'div':
                div(this, parseInt(args[0], 10));
                break;
            case 'print':
                print(this);
                break;
            case 'clear':
                clear(this);
                break;
            case 'createFile':
                createFile(this, args[0]);
                break;
            case 'readFile':
                readFile(this, args[0]);
                break;
            case 'writeFile':
                writeFile(this, args[0], args.slice(1).join(' '));
                break;
            case 'deleteFile':
                deleteFile(this, args[0]);
                break;
            case 'createProcess':
                createProcess(this, args);
                break;
            case 'runProcess':
                runProcess(this, parseInt(args[0], 10));
                break;
            case 'terminateProcess':
                terminateProcess(this, parseInt(args[0], 10));
                break;
            default:
                console.log(`Unknown command: ${cmd}`);
        }
    }

    shell() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.setPrompt('os> ');
        rl.prompt();

        rl.on('line', (line) => {
            this.run(line.trim());
            rl.prompt();
        }).on('close', () => {
            console.log('Exiting OS shell');
            process.exit(0);
        });
    }
}

module.exports = OperatingSystem;