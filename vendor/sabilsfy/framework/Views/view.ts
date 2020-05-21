import { dejs } from "../Core/_module.ts";

/**
 * Sabilsfy - A Deno Framework for Web Artisan
 *
 * 
 * Rendering file .EJS from controller or anything
 * @package  Sabilsfy
 * @author   Revell29 <diraapsya0@gmail.com>
 */
export async function View(FileName: string, Arg: any = ""): Promise<any> {
  const output = await dejs.renderFileToString(
    `${Deno.cwd()}/resources/views/${FileName}.ejs`,
    { Arg },
  );

  return output;
}
