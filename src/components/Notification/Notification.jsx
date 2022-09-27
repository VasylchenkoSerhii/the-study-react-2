import { Box } from "components/Box/Box";
import { Message } from "./Notification.styled";

export const Notification = ({ message }) => {
    return (
        <Box
            width="65%"
            ml="auto"
            mr="auto"
            textAlign="center"
        >
            <Message>{message}</Message>
        </Box>
    );
};