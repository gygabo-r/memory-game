export function randomizePictures(pickedCodes: string[]) {
    const randomizedPics = [];
    const length = pickedCodes.length;
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * pickedCodes.length);
        randomizedPics.push(pickedCodes[index]);
        pickedCodes.splice(index, 1);
    }
    return randomizedPics;
}
