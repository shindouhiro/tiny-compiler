import { Token, TokenType } from "./types";

export function tokenizer(code: string) {
  const tokens: Token[] = [];
  let current = 0;
  while (current < code.length) {
    let char = code[current];
    if (char === "(") {
      tokens.push({ type: TokenType.Paren, value: "(" });
      current++;
      continue;
    }

    

    const REGSTRING = /[a-z]/i
    if (REGSTRING.test(char)) {
      let value = "";
      while (REGSTRING.test(char) && current < code.length) {
        value += char;
        char = code[++current];
      }
      tokens.push({ type: TokenType.Name, value });
      continue;
    }


    const REGNUMBER = /[0-9]/
    if (REGNUMBER.test(char)) {
      let value = "";
      while (REGNUMBER.test(char) && current < code.length) {
        value += char;
        // current++;
        char = code[++current];
        // char = code[current];
      }
      tokens.push({ type: TokenType.Number, value });
      continue;
    }

    if (char === ")") {
      tokens.push({ type: TokenType.Paren, value: char });
      current++;
      continue;
    }
    
    let REGSPACE = /\s/
    if (REGSPACE.test(char)) {
      current++;
      continue;
    }
  }
  return tokens;
}
