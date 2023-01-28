const mongoose = require('mongoose')

const pirateSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a Pirate name"],
        minLength: [3, "Name must be at least 3 characters"]
    },
    img: {
        type: String,
        required: [true, "Please enter an Image"]
    },
    numOfChest: {
        type: Number,
        required: [true, "Please enter a Treasure Chest count"]
    },
    pirateCatchPhrase: {
        type: String,
        required: [true, "Please enter a Catch Phrase"]
    },
    crewPosition: {
        type: String,
        required: [true, "Please enter a Crew Position"]
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Pirate = mongoose.model('Author', pirateSchema)
module.exports = Pirate