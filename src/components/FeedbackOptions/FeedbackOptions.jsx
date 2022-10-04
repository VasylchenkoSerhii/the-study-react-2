import { Box } from "components/Box/Box";
import { FeedbackButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    
    const typeFeedback = Object.keys(options);
    return (
        <Box
            width="65%"
            ml="auto"
            mr="auto"
            display="flex"
            justifyContent="space-evenly"
        >
            <FeedbackButton type="button" onClick={() => onLeaveFeedback(typeFeedback[0])}>
                {typeFeedback[0]}
            </FeedbackButton>
            <FeedbackButton type="button" onClick={() => onLeaveFeedback(typeFeedback[1])}>
                {typeFeedback[1]}
            </FeedbackButton>
            <FeedbackButton type="button" onClick={() => onLeaveFeedback(typeFeedback[2])}>
                {typeFeedback[2]}
            </FeedbackButton>
        </Box>
    );
};