const oantutiState = {
    imageList: [
        { name: "keo", image: "./oantuti_image/keo.png", status: true },
        { name: "bua", image: "./oantuti_image/bua.png", status: false },
        { name: "bao", image: "./oantuti_image/bao.png", status: false },
    ],
    quote: "Game oẳn tù tì",
    score: 0,
    match: 0,
    computer: { name: "keo", image: "./oantuti_image/keo.png", status: true },
}

const oantutiReducer = (state = oantutiState, action) => {
    switch (action.type) {
        case "CHOICE": {
            let imageList = [...state.imageList];
            const newImageList = imageList.map((item) => {
                return { ...item, status: false }
            })
            const index = newImageList.findIndex((item) => item.name === action.payload)
            if (index !== -1) {
                newImageList[index].status = true;
                state.imageList = newImageList
            }
            return { ...state }
        }
        case "RANDOM_IMAGE": {
            let imageList = [...state.imageList]
            const index = Math.floor(Math.random() * imageList.length);
            state.computer = imageList[index]
            return { ...state }
        }
        case "RESULT": {
            let choice = state.imageList.find((item) => item.status === true)
            let computer = state.computer.name
            console.log(computer)
            switch (choice.name) {
                case "keo": {
                    if (computer === "keo") {
                        state.quote = "Hoà"
                    } else if (computer === "bua") {
                        state.quote = "Bạn đã thua"
                    } else {
                        state.quote = "Bạn đã thắng"
                        state.score++
                    }
                    break;
                }
                case "bua": {
                    if (computer === "bua") {
                        state.quote = "Hoà"
                    } else if (computer === "keo") {
                        state.quote = "Bạn đã thua"
                    } else {
                        state.quote = "Bạn đã thắng"
                        state.score++
                    }
                    break;
                }
                case "bao": {
                    if (computer === "bao") {
                        state.quote = "Hoà"
                    } else if (computer === "bua") {
                        state.quote = "Bạn đã thắng"
                    } else {
                        state.quote = "Bạn đã thua"
                        state.score++
                    }
                    break;
                }
                default:
                    state.quote = "Game oẳn tù tì";
            }
            state.match++
            return { ...state }
        }

        default:
            return { ...state };
    }
}

export default oantutiReducer