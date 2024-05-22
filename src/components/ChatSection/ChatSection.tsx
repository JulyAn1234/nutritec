import { Grid } from "@mui/material";
import MessageSection from "./MessagesSection/MessagesSection";
import PromptSection from "./PromptSection/PromptSection";

function ChatSection() {
  return (
    <Grid 
        container xs = {12}
        style={{height:"99vh"}}
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-start">
            <Grid item> 
                <MessageSection/>
            </Grid>
            <Grid item style={{width:"97%"}}> 
                <PromptSection/>
            </Grid>

    </Grid>
  );
}

export default ChatSection