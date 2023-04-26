
const printPalindrome = () => {
    let textValue = document.getElementById("input-text").value;
    if(textValue !== "") {
        // splitting the string into the word. 'hello this' ==> ['hello', 'this']
        textValue = textValue.split(' ');

        let outputScreen = document.getElementById('output-text');

        // iterating over all the array
        textValue.forEach(word => {
            if(isPalindrome(word)) {
                outputScreen.innerHTML += word + ", ";
            }
        });
    }
}

const isPalindrome = (word) => {
    let i=0, j=word.length-1;

    while(i < j) {
        if(word[i] !== word[j]) return false;
        i++;
        j--;
    }
    return true;
}

/*

    PAPAP
    ii   j

     

*/