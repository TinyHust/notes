recursive combinations

```
var v = [['Miniors','Kadettes','Juniors', 'Seniors'], ['Boys','Girls','Men','Women'],['54kg - 62kg','64kg - 70kg','71kg - 78kg','79kg - 84kg']];
var combos = createCombinations(v);
for(var i = 0; i < combos.length; i++) {
  document.getElementsByTagName("body")[0].innerHTML += combos[i] + "<br/>";
}

function createCombinations(fields, currentCombinations) {
  //prevent side-effects
  var tempFields = fields.slice();

  //recursively build a list combinations
  var delimiter = ' | ';
  if (!tempFields || tempFields.length == 0) {
    return currentCombinations;
  }
  else {
    var combinations = [];
    var field = tempFields.pop();

    for (var valueIndex = 0; valueIndex < field.length; valueIndex++) {
      var valueName = field[valueIndex];

      if (!currentCombinations || currentCombinations.length == 0) {
        var combinationName = valueName;
        combinations.push(combinationName);
      }
      else {
        for (var combinationIndex = 0; combinationIndex < currentCombinations.length; combinationIndex++) {
          var currentCombination = currentCombinations[combinationIndex];
          var combinationName = valueName + delimiter + currentCombination;
          combinations.push(combinationName);
        }
      }
    }
    return createCombinations(tempFields, combinations);
  }
}
```