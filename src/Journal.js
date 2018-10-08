export function journal(content) {
  var numberOfWords = content.split(' ');
  var count = numberOfWords.length;
  return count;
}

export function countVowels (content) {
  var vowels = ["a","e","i","o","u"];
  var vowelcount = 0;
  for (var i=0;i< content.length;i ++){
      if(vowels.includes(content[i])){
        vowelcount++;
     }
  }
  return vowelcount;
}

export function countConsonants (content) {
  var vowels = ["a","e","i","o","u"];
  var count = 0;
  for (var i=0;i< content.length;i ++){
      if(!vowels.includes(content[i]) && content[i] !== " "){
        count++;
     }
  }
  return count;
}

export function getTeaser(content)
{
  var contenToArray = content.split(' ');
  var output = [];
  for(var i=0; i< 8; i ++)
  {
    output.push(contenToArray[i] + " ");
  }
  return output;
}
