import { getCurrentDirPath } from "../../path.js";
import path from "path"
import fs from 'fs'

export const loadMessageBundler = () => {
   const dir= getCurrentDirPath();
   const jsonPath=path.join(dir,'/constants/i18n/en.json')
   const message =JSON.parse(fs.readFileSync(jsonPath))
   return message
};