import { Grid } from "@mui/material";
import styles from './Message.module.css';
import Message from './Message'
import MessageModel from './Message.model'

const arr = [
    {
        senderName: "You",
        messageText: "Hello, how are you?"
    },
    {
        senderName: "NutriTec",
        messageText: "Good, thank you"
    },
    {
        senderName: "NutriTec",
        messageText: "How can I help you?"
    },
    {
        senderName: "You",
        messageText: "I want to know if I can eat pizza"
    },
    {
        senderName: "NutriTec",
        messageText: "Sure, but not excessively"
    },
    {
        senderName: "NutriTec",
        messageText: "Anything else?"
    },
    {
        senderName: "You",
        messageText: "No, thank you"
    },
    {
        senderName: "NutriTec",
        messageText: "You're welcome"
    },
    {
        senderName: "NutriTec",
        messageText: "Anything else?"
    },
    {
        senderName: "You",
        messageText: "No, thank you"
    },
    {
        senderName: "NutriTec",
        messageText: "You're welcome"
    },
    {
        senderName: "NutriTec",
        messageText: "Anything else?"
    },
    {
        senderName: "You",
        messageText: "No, thank you"
    },
    {
        senderName: "NutriTec",
        messageText: "You're welcome"
    },
    {
        senderName: "NutriTec",
        messageText: "..."
    }
];

function MessagesSection() {
    return (
        <div className={styles.messageContainer}>
            <div className={styles.scrollableContainer}>
                {/* <div className={styles.messageContainer}> */}
                    <Grid className={styles.MessageStack} container gap={2} direction="column">
                        {/* Render 10 Message components */}
                        {arr.map((item, index) => (
                            <Grid item key={index}>
                                <Message {...item} />
                            </Grid>
                        ))}
                    </Grid>
                {/* </div> */}
            </div>
        </div>
    );
}

export default MessagesSection;
