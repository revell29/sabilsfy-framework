export default function template(name: string): string {
  return `import { database } from "../../vendor/sabilsfy/framework/Database/Connection.ts";
  import { View } from "../../vendor/sabilsfy/framework/Views/view.ts";
  
  export class ${name}  {
    /**
       * Set the output of index function
       * @param {any}
       * @return {any} abstract of index function
       */
    async index(req: any, res: any) {
      const data = "";
      return res.send(View("resources/views/welcom", data));
    }
  }
`;
}
