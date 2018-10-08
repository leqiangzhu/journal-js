import { journal, countVowels, countConsonants, getTeaser } from './Journal';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var content = $('#content').val();
    var output = journal(content);
    var output1 = countVowels(content);
    var output2 = countConsonants(content);
    var output3 = getTeaser(content);
    $('.count').empty();
    $('.vowelcount').empty();
    $('.consonantcount').empty();
    $('.word').empty();
    $('.count').append(output);
    $('.vowelcount').append(output1);
    $('.consonantcount').append(output2);
    $('.word').append(output3);
  });
});
