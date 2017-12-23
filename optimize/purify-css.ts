import purifycss from "purify-css";
import {require} from '../src/test';
const purifycss = require("purify-css");

let content = ""
let css = ""
let options = {
  output: "filepath/output.css"
}

purify(content, css, options);
