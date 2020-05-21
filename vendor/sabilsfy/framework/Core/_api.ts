import {
  bgBlue,
  red,
  green,
  blue,
  bold,
  italic,
} from "https://deno.land/std@0.52.0/fmt/mod.ts";
import Spinner from "https://raw.githubusercontent.com/ameerthehacker/cli-spinners/master/mod.ts";
import { command } from "./_command.ts";
import server from "../init.ts";
import template from "./_template.ts";

export class Api {
  constructor() {
    command(this, Deno.args);
  }

  async version(): Promise<void> {
    const spinners = Spinner.getInstance();
    // await spinners.start("Getting verion framework");
    console.log(blue(`Framework version is v0.0.1`));
  }

  async startServer(): Promise<void> {
    server();
  }

  async makeController(fileName: string): Promise<void> {
    if (!fileName) return this.message(red("please provide controller nme"));

    const encoder = new TextEncoder();
    const data = encoder.encode(template(fileName));
    Deno.writeFile(`${Deno.cwd()}/app/controllers/${fileName}.ts`, data);
  }

  message(message: any) {
    console.log(`${message}`);
  }

  printLogo() {
    const logo = `
      
,d88~~\           888       ,e, 888          88~\         
8888      /~~~8e  888-~88e   "  888  d88~\ _888__ Y88b  / 
Y88b         88b 888  888b 888 888 C888    888    Y888/  
 Y88b,  e88~-888 888  8888 888 888  Y88b   888     Y8/   
   8888 C888  888 888  888P 888 888   888D  888      Y    
\__88P'  "88_-888 888-_88"  888 888 \_88P   888     /     
                                                  _/    
    `;
    console.info(blue(logo));
  }

  printHelp() {
    this.printLogo();
    console.info("Sabilsfy framework v0.0.1 - CLI");
    console.info(`
Commands:

sabil --help
    This screen

sabil new [app_name]
    Initialize new project

sabil start
    Start HTTP server
    `);
  }

  async newApps(projectName: string) {
    const spinner = Spinner.getInstance();
    this.printLogo();
    spinner.start("Ensuring project directory is clean");
    spinner.setSpinnerType("dots2");

    setTimeout(async () => {
      spinner.setText("Contacting the server..");
      spinner.setSpinnerType("weather");
      spinner.setText("Installing dependencies..");
      const cloningProject = Deno.run({
        cmd: [
          "git",
          "clone",
          "--quiet",
          "https://github.com/revell29/sabilsfy-framework.git",
          projectName,
        ],
      });

      await cloningProject.status();
      spinner.setText("Dependencies installed");

      setTimeout(() => {
        spinner.setText("sabilsfy successfully installed");
        spinner.succeed();
      }, 200);
    }, 2000);
  }
}
