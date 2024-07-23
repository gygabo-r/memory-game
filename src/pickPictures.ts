import {picture_codes} from './picture_codes.ts';

export function pickPictures(numberOfPics: number) {
    let pickedCodes: string[] = [];
    const pics = Object.keys(picture_codes);
    for (let i = 0; i < numberOfPics; i++) {
        const index = Math.floor(Math.random() * pics.length);
        pickedCodes.push(pics[index]);
        pics.splice(index, 1);
    }
    pickedCodes = pickedCodes.reduce((acc, curr) => {
        return [...acc, curr, curr]
    }, [] as string[]);
    return pickedCodes;
}
