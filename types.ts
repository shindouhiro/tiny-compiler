export enum TokenType {
  Paren = 'paren',
  Name = 'name',
  Number = 'number'
}

export interface Token {
  type: TokenType;
  value: string;
}
