const arr = ['one', 'two', 'three', 'four', 'five'];

const checkConsole = (functionName, ...argument) => {
    console.log(`arr execute ${functionName}`, arr[functionName](...argument));
    console.log(`arr ${functionName} after`, arr);
}

// push
checkConsole('push', 'six');
// pop
checkConsole('pop');
// shift
checkConsole('shift');
// unshift
checkConsole('unshift', 'seven');
// indexOf
checkConsole('indexOf', 'seven');
// splice
checkConsole('splice', 0, 1);
// slice
checkConsole('slice');