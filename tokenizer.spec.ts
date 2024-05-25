import { expect, test } from 'vitest'
import { tokenizer } from './tokenizer'
import { TokenType } from './types'
test('(add 2 (subtract 4 2))',()=> {
  const input = '(add 2 (subtract 4 2))'
  const tokens = [
     { type: TokenType.Paren,  value: '('},
     { type: TokenType.Name,   value: 'add'},
     { type: TokenType.Number, value: '2' },
     { type: TokenType.Paren,  value: '('},
     { type: TokenType.Name,   value: 'subtract' },
     { type: TokenType.Number, value: '4' },
     { type: TokenType.Number, value: '2'},
     { type: TokenType.Paren,  value: ')'},
     { type: TokenType.Paren,  value: ')'},
  ]
  expect(tokenizer(input)).toEqual(tokens)
})


test('paren (',()=> {
  const input = '('
  const tokens = [
     { type: TokenType.Paren,  value: '('},
  ]
  expect(tokenizer(input)).toEqual(tokens)
})

test('name add',()=> {
  const input = 'add'
  const tokens = [
     { type: TokenType.Name,  value: 'add'},
  ]
  expect(tokenizer(input)).toEqual(tokens)
})

test('number 22',()=> {
  const input = '22'
  const tokens = [
     { type: TokenType.Number,  value: '22'},
  ]
  expect(tokenizer(input)).toEqual(tokens)
})


