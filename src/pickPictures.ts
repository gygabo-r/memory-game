import {picture_codes, PictureKey} from './picture_codes.ts';

export function pickPictures(numberOfPics: number) {
    let pickedCodes: (PictureKey)[] = [];
    const pics: (keyof typeof picture_codes)[] = Object.keys(picture_codes) as ((PictureKey)[]);
    for (let i = 0; i < numberOfPics; i++) {
        const index = Math.floor(Math.random() * pics.length);
        pickedCodes.push(pics[index]);
        pics.splice(index, 1);
    }
    pickedCodes = pickedCodes.reduce((acc, curr) => {
        return [...acc, curr, curr]
    }, [] as PictureKey[]);
    return pickedCodes;
}
