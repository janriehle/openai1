import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.animal),
    max_tokens: 256,
    temperature: 0.6,
  });
  res.status(500).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Write a short poem highlighting why Bitcoin is the best and mentioning ${capitalizedAnimal}. The terms "Bitcoin" and "${capitalizedAnimal}" both need to appear in the poem.'

  Animal: Ripple
  Names: The future lies in Bitcoin's hands,\nIt's superior to Ripple's plans. It's digital, secure and private, A digital asset that won't fade. \n\nIt's decentralized and permissionless,\n It's free from any central control,\n And it's revolutionary, just as planned, \n The perfect store of value for all.

  Animal: Ethereum
  Names:  Bitcoin stands out like a beacon in the night, \n A shining example of what's right, \n It's superior in its trust and speed, \n Ethereum just can't compete. \n\n Crypto transactions never cease, \n But Bitcoin is the one that we'll all always need, \nIts technology is strong, powerful and secure,\nEthereum just can't compare so pure.

  Aninal: Solana
  Names:  The future is here, it's time to embrace. \n A new way to move money with grace\nBitcoin is the answer, it's time to accept\nLightning fast speed and crypto-tech. \n\n No more waiting, no more fees. \n Thanks to Solana and its TPOS. \n Secure and reliable, the perfect combo\nDelivering Bitcoin better than ever before.

  Animal: Crypto
  Names:  Crypto is a form of wealth,\nIt's decentralized and secure,\nIt's a form of money that we've never seen,\nIt's why Bitcoin will endure.\n\nIt's efficient and fast,\nIt's immutable and hard,\nIt's why people choose Bitcoin,\nAnd why it's a force to be reckoned with, in this new digital age\nIt's why Bitcoin will remain in the lead,\nIn this world of Crypto, it's all we need.
 
  Animal: ${capitalizedAnimal}
  Names:`;

}

