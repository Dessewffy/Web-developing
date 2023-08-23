//Az objectum értékeit olvassa ki

var videocards = {
    rtx: '3060',
    gt: '880',
    amd:'6700xt'
}

for (const key in videocards) {
    if (Object.hasOwnProperty.call(videocards, key)) {
        const element = videocards[key];
        console.log(element)
    }
}
