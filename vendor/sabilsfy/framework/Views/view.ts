import { dejs } from "../Core/_module.ts";

/**
 *  Render file Ejs from Controller
 * 
 * @param FileName 
 * @param Arg 
 */
export async function View(FileName: string, Arg: any = ""): Promise<any> {
  const output = await dejs.renderFileToString(
    `${Deno.cwd()}/resources/views/${FileName}.ejs`,
    { Arg },
  );

  return output;
}
