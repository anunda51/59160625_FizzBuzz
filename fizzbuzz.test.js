const fizzbuzz = require("./fizzbuzz")

//หาร 3 ลงตัว
test('Three print Fizz',()=>{
    expect(fizzbuzz(6)).toBe("Fizz");
})

//หาร 5 ลงตัว
test('Five print Buzz',()=>{
    expect(fizzbuzz(5)).toBe("Buzz");
})

//หาร 3 และ 5 ลงตัว
test('Three and Five print FizzBuzz',()=>{
    expect(fizzbuzz(15)).toBe("FizzBuzz");
})

//หาร 3 และ 5 ไม่ลงตัว
test('Number print Number',()=>{
    expect(fizzbuzz(4)).toBe("4");
})

// ****Stage 2 New requirment****

//มี 3 เป็นส่วนประกอบ
test('has a 3 in it',()=>{
    expect(fizzbuzz(31)).toBe("Fizz");
})

test('has a 3 in it',()=>{
    expect(fizzbuzz(43)).toBe("Fizz");
})

//มี 5 เป็นส่วนประกอบ
test('has a 5 in it',()=>{
    expect(fizzbuzz(52)).toBe("Buzz");
})