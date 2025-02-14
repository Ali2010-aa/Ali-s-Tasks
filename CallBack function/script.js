function func(a, b, callback) {
  let result = callback(a, b);
  console.log(`netice:${result}`);
}

function toplama(a, b) {
 return a + b;
}
function vurma(a, b) {
  return a * b;
}
func(4, 6, toplama);
