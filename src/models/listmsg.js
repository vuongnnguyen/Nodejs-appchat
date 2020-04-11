const mongoose = require('mongoose');
const User= require('./user');
const listmsgSchema = new mongoose.Schema({
    seen: { type: String},
    msg: { type: String},
    created: { type: Number},
    roomname: { type: String},
    idsend: { type: String}
    
    //default: +(new Date().getTime()) 
});

const ListMsgModel = mongoose.model('listmsg', listmsgSchema);

class ListMsg extends ListMsgModel {
    

    static async createAmsg( idsend, seen, msg, created, roomname) {
        const amsg= await new ListMsg({ idsend, seen, msg, created, roomname });
        await amsg.save();
        // this.vuong(idsend, idto, amsg._id);
        // User.addMsg(idsend, idto, amsg._id)
        // await User.findOneAndUpdate({ _id: amsg.idsend }, { $push: { msg: amsg._id }});
        // await User.findOneAndUpdate({ _id: amsg.idto }, { $push: { msg: amsg._id }})
        //await User.findByIdAndUpdate({ _id: { $in: [ amsg.idsend, amsg.idto ]}}, { $push: { msg: amsg._id } })
        return amsg;
    }


    // static async vuong(idsend, idto, id) {
    //    await User.gggg(idsend, idto, id);
    //    return 1;

//}



}

module.exports= ListMsg;