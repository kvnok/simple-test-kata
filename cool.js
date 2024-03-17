function solve(s) {
    let stack = []
    let sign = 1
    let res = ''

    const operations = {
        '+': () => { sign = 1; },
        '-': () => { sign = -1; },
        '(': () => { stack.push(sign); sign = 1},
        ')': () => { stack.pop(); sign = 1},
        default: (c) => {
            let cur_sign = sign;
            for (let i = stack.length - 1; i >= 0; i--) {
                cur_sign *= stack[i];
            }
            res += (cur_sign === 1 ? '+' : '-') + c;
        }
    };

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const operation = operations[c] || operations.default;
        operation(c);
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
