export function sum (a, b) {
    return {
        type: 'SUM', 
        payload: [a,b]
    }
}

export function subtract (a, b) {
    return {
      type: 'SUBT',
      payload: [a, b]
    }
  }
  