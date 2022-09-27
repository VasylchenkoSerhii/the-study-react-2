import { Box } from "components/Box/Box";
import { Vote, Accent } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Box
            width="65%"
            ml="auto"
            mr="auto"
            textAlign="center"
        >
            <Vote>Good: <Accent>{good}</Accent></Vote>
            <Vote>Neutral: <Accent>{neutral}</Accent></Vote>
            <Vote>Bad: <Accent>{bad}</Accent></Vote>
            <Vote>Total: <Accent>{total}</Accent></Vote>
            <Vote>Positive feedback: <Accent>{positivePercentage} %</Accent></Vote>
        </Box>
    );
};