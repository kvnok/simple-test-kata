function solve(s) {
    let stack = []
    let sign = 1
    let res = ''

    for (let c of s) {
    switch (c) {
        case '(':
            stack.push(sign)
            sign = 1
            break
        case ')':
            stack.pop()
            sign = 1
            break
        case '-':
            sign = -1
            break
        case '+':
            sign = 1
            break
        default:
            let currentSign = sign;
            for (let i = stack.length - 1; i >= 0; i--) {
                currentSign *= stack[i];
            }
            res += (currentSign === 1 ? '+' : '-') + c;
            break;
    }
    }
    return res.replace(/^\+/, '');
}

// console.log(solve("a-(b)"));
// console.log(solve("a-(-b)"));
// console.log(solve("a+(b)"));
// console.log(solve("a+(-b)"));
// console.log(solve("(((((((((-((-(((n))))))))))))))"));
// console.log(solve("(((a-((((-(-(f)))))))))"));
// console.log(solve("((((-(-(-(-(m-g))))))))"));
// console.log(solve("(((((((m-(-(((((t)))))))))))))"));
// console.log(solve("-x"));
// console.log(solve("-(-(x))"));
// console.log(solve("-((-x))"));
// console.log(solve("-(-(-x))"));
// console.log(solve("-(-(x-y))"));
// console.log(solve("-(x-y)"));
// console.log(solve("x-(y+z)"));
// console.log(solve("x-(y-z)"));
// console.log(solve("x-(-y-z)"));
// console.log(solve("x-(-((-((((-((-(-(-y)))))))))))"));
// console.log(solve("u-(v-w+(x+y))-z"));
// console.log(solve("x-(s-(y-z))-(a+b)"));
// console.log(solve("u+(g+v)+(r+t)"));
// console.log(solve("q+(s-(x-o))-(t-(w-a))"));
// console.log(solve("u-(v-w-(x+y))-z"));
// console.log(solve("v-(l+s)-(t+y)-(c+f)+(b-(n-p))"));

module.exports = solve;

//https://www.codewars.com/kata/simple-parenthesis-removal
// In this Kata, you will be given a mathematical string and your task will be to remove all braces as follows:

// solve("x-(y+z)") = "x-y-z"
// solve("x-(y-z)") = "x-y+z"
// solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
// solve("x-(-y-z)") = "x+y+z"
// There are no spaces in the expression. Only two operators are given: "+" or "-".

// More examples in test cases.

// Good luck!


function solve2(str) {
    let result = '';
    let signStack = [];
    let currentSign = 1;

    const operations = {
        '+': () => { currentSign = 1; },
        '-': () => { currentSign = -1; },
        '(': () => { signStack.push(currentSign); },
        ')': () => { signStack.pop(); },
        default: (char) => {
            if (signStack.length > 0) {
                result += (currentSign * signStack[signStack.length - 1] === -1) ? '-' : '+';
            } else {
                result += (currentSign === -1) ? '-' : '+';
            }
            result += char;
        }
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const operation = operations[char] || operations.default;
        operation(char);
    }

    return result;
}