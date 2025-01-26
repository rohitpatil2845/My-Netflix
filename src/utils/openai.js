import OpenAI from "openai";
import { OPENAI_KEY1 } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY1,
  dangerouslyAllowBrowser: true,
});

export default openai;