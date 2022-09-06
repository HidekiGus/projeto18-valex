import { findByApiKey } from "../repositories/companyRepository.js";

export async function createCardService(employeeId: number, cardType: string, apiKey: string) {
  
  const data = await findByApiKey(apiKey);
  
  if (data.length === 0) {
    throw { type: "NotFound", message: "Company not found!"}
  }

  
}