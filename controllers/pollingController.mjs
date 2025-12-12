import Polls from "../models/Polls.mjs";

export const createPolls = async (req, res, next) => {
    const pollQues = req.body
    const options = [pollQues.option1, pollQues.option2, pollQues.option3, pollQues.option4]
    const uniqueOptions = [...new Set(options)]
    for (const option of options) {
        if ((option.trim() === "") || (uniqueOptions.length != 4)) {
            return res.status(400).json({ message: "All options must be unique and inputs should not be empty" })
        }
    }

    try {
        const result = await Polls.deleteOne()
        const saveResult = await Polls.create(req.body)
        res.status(201).json({ message: "Poll created successfully" })
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const fetchPoll = async (req, res, next) => {
    try {
        const results = await Polls.findOne()
        if (!results) return res.status(400).json({ error: "Poll not found. Please create a poll" })
        res.status(200).json(results)
        res.end()
    } catch (error) {
        console.error(error)
    }
}

export const updateVote = async (req, res, next) => {
    try {
        const { selectedOption } = req.body;
        // console.log(selectedOption);
        const poll = await Polls.findOne();
        // console.log(poll);
        switch (selectedOption) {
            case 'option1':
                poll.option1Votes += 1;
                break;
            case 'option2':
                poll.option2Votes += 1;
                break;
            case 'option3':
                poll.option3Votes += 1;
                break;
            case 'option4':
                poll.option4Votes += 1;
                break;
        }

        const total = poll.option1Votes + poll.option2Votes + poll.option3Votes + poll.option4Votes;

        // update percentages
        poll.option1Percentage = 100 * (poll.option1Votes / total);
        poll.option2Percentage = 100 * (poll.option2Votes / total);
        poll.option3Percentage = 100 * (poll.option3Votes / total);
        poll.option4Percentage = 100 * (poll.option4Votes / total);

        await poll.save({ runValidators: true });

        return res.status(200).json({ message: "Successful" });

    } catch (error) {
        // console.log(error);
        res.status(400).json({ error: error.message });
    }
};