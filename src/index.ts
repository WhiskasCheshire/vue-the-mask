import masker from "./masker";
import tokens from "./tokens";

export default function (text,mask) {

  return masker(text,mask,true,tokens)

}
