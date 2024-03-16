// Import the assert module from Node.js
const assert = require('assert');

// Import the code you want to test
const solve = require('../cool.js');

describe("Basic tests", function(){
	assert.strictEqual(solve("a-(b)"),"a-b");
	assert.strictEqual(solve("a-(-b)"),"a+b");
	assert.strictEqual(solve("a+(b)"),"a+b");
	assert.strictEqual(solve("a+(-b)"),"a-b");
	assert.strictEqual(solve("(((((((((-((-(((n))))))))))))))"),"n");
	assert.strictEqual(solve("(((a-((((-(-(f)))))))))"),"a-f");
	assert.strictEqual(solve("((((-(-(-(-(m-g))))))))"),"m-g");
	assert.strictEqual(solve("(((((((m-(-(((((t)))))))))))))"),"m+t");
	assert.strictEqual(solve("-x"),"-x");
	assert.strictEqual(solve("-(-(x))"),"x");
	assert.strictEqual(solve("-((-x))"),"x");
	assert.strictEqual(solve("-(-(-x))"),"-x");
	assert.strictEqual(solve("-(-(x-y))"),"x-y");
	assert.strictEqual(solve("-(x-y)"),"-x+y");
	assert.strictEqual(solve("x-(y+z)"),"x-y-z");
	assert.strictEqual(solve("x-(y-z)"),"x-y+z");
	assert.strictEqual(solve("x-(-y-z)"),"x+y+z");
	assert.strictEqual(solve("x-(-((-((((-((-(-(-y)))))))))))"),"x-y");
	assert.strictEqual(solve("u-(v-w+(x+y))-z"),"u-v+w-x-y-z");
	assert.strictEqual(solve("x-(s-(y-z))-(a+b)"),"x-s+y-z-a-b");
	assert.strictEqual(solve("u+(g+v)+(r+t)"),"u+g+v+r+t");
	assert.strictEqual(solve("q+(s-(x-o))-(t-(w-a))"),"q+s-x+o-t+w-a");
	assert.strictEqual(solve("u-(v-w-(x+y))-z"),"u-v+w+x+y-z");
	assert.strictEqual(solve("v-(l+s)-(t+y)-(c+f)+(b-(n-p))"),"v-l-s-t-y-c-f+b-n+p");
});
