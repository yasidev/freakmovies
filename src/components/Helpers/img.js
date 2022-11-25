import { baseImgURL } from "../config";

export function imgLoader(path, size) {
  return `${baseImgURL}/${size}/${path}`;
}
