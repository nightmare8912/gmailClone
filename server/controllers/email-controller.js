import Email from "../model/email.js";

export const saveSentEmails = (request, response) => {
    try {
        const email = new Email(request.body); // this will validate the mail
        email.save();

        response.status(200).json('email saved successfully');
    } 
    catch (error) {
        response.status(500).json(error.message);
    }
}