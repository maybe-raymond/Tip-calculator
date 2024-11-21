const IsNumeric = (num: string): [boolean, number] => {
    let value = parseInt(num, 10)
    if (Number.isNaN(value)) return [false, 0]
    return [true, value] 
  }

  export default IsNumeric