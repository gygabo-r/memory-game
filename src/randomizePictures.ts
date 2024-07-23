import {PictureKey} from './picture_codes.ts';

export function randomizePictures(pickedCodes: PictureKey[]) {
    const randomizedPics: PictureKey[] = [];
    const length = pickedCodes.length;
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * pickedCodes.length);
        randomizedPics.push(pickedCodes[index]);
        pickedCodes.splice(index, 1);
    }
    return randomizedPics;
}
