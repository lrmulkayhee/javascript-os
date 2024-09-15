# JavaScript OS

JavaScript OS is a simple operating system simulation written in JavaScript. It includes basic functionalities such as process management, memory management, and file system operations.

## Features

- **Process Management**: Create, run, and terminate processes.
- **Memory Management**: Load, store, and manipulate data in memory.
- **File System**: Create, read, write, and delete files.

## Directory Structure
project/ ├── fs/ # File system root ├── src/ │ ├── commands/ # Command modules │ │ ├── FileCommands.js │ │ ├── MemoryCommands.js │ │ ├── ProcessCommands.js │ ├── os/ # Operating system core │ │ ├── OperatingSystem.js │ │ ├── Process.js │ ├── index.js # Entry point


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/javascript-os.git
    cd javascript-os
    ```

2. Install dependencies (if any):
    ```sh
    npm install
    ```

## Usage

1. Start the operating system shell:
    ```sh
    node src/index.js
    ```

2. Use the following commands in the shell:

### Memory Commands

- `load <value>`: Load a value into the accumulator.
- `store <address>`: Store the accumulator value at the specified memory address.
- `add <value>`: Add a value to the accumulator.
- `sub <value>`: Subtract a value from the accumulator.
- `mul <value>`: Multiply the accumulator by a value.
- `div <value>`: Divide the accumulator by a value.
- `print`: Print the value of the accumulator.
- `clear`: Clear the accumulator.

### File Commands

- `createFile <filename>`: Create a new file.
- `readFile <filename>`: Read the contents of a file.
- `writeFile <filename> <content>`: Write content to a file.
- `deleteFile <filename>`: Delete a file.

### Process Commands

- `createProcess <instructions>`: Create a new process with a list of instructions.
- `runProcess <pid>`: Run a process by its PID.
- `terminateProcess <pid>`: Terminate a process by its PID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.