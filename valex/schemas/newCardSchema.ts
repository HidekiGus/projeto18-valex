import joi from "joi";

const newCardSchema = joi.object({
  "employeeId": joi.number().integer().required(),
  "cardType": joi.string().valid("groceries", "restaurants", "transport", "education", "health").required()
});

export default newCardSchema;