export const baseURL = "https://api.themoviedb.org/3";
export const apiKey = "e53bab22614cda1579762df1ee0a0c4b";
export const baseImgURL = "http://image.tmdb.org/t/p";
export const youTubeURL = "https://www.youtube.com/embed";

export function putImage(path, size = "w300") {
  return `${baseImgURL}/${size}${path}`;
}
