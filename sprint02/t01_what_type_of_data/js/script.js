let number = 2;
let bigint = BigInt(9007199254740991);
let string = "name";
let flag = true;
let n = null;
let undef;
let obj = {};
let sym = Symbol("Symbol");
let func = function(){};

alert(`number is ${typeof number}
bigint is ${typeof bigint}
string is ${typeof string}
flag is ${typeof flag}
n is ${typeof n}
undef is ${typeof undef}
obj is ${typeof obj}
sym is ${typeof sym}
func is ${typeof func}`);