const commandList = [
  "start",
  "version",
  "make:controller",
  "--help",
  "new",
];

export function command(obj: { [key: string]: any }, args: string[]): void {
  const commandName: string = args[0];

  // check if the `commandName` is exists on the `obj` object
  if (commandList.includes(commandName)) {
    const aliasName: string = args[1];
    const targetFile: string = args[2];

    if (commandName === "start") {
      obj.startServer(aliasName, targetFile);
    } else if (commandName === "version") {
      obj.version();
    } else if (commandName === "make:controller") {
      obj.makeController(args[1]);
    } else if (commandName === "--help") {
      obj.printHelp();
    } else if (commandName === "new") {
      obj.newApps(args[1]);
    }
  } else {
    obj.printHelp();
  }
}
