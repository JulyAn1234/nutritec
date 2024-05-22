import styles from './Message.module.css';
import MessageModel from './Message.model';
import NutritecLogo from './NutriTec.jpg';

function Message({senderName, messageText}: MessageModel) {

    const senderPicture = senderName ==="You" ?
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : 
        NutritecLogo

    return (
        <div className="flex row gap-4" style={{width:"100%", margin:"0px"}}>
            {/* sender picture */}
            <div className="flex-none col " style={{width:"5%"}}>
                {/* Rounded profile picture */}

                <img className="rounded-full" src={senderPicture} alt="" />
            </div>
            {/* Message */}
            <div className="flex-none col" style={{width:"90%"}}>
                {/* sender name */}
                <div className="flex-none row">
                    <h2>{senderName}</h2>
                </div>
                {/* Message Text */}
                <div className={`flex-none row`}>
                    {/* lorem */}
                    <p className={styles.MessageText}>{messageText}</p>
                </div>
            </div>
        </div>
    );
}

export default Message;