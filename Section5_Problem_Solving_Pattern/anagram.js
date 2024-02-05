function vaildAnagram(first, second){
    if(first.length !== second.length) {
        return false
    }
    
    const lookup = {};

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exist, incremet. otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true
}

//vaildAnagram('', '') // true
//vaildAnagram('aaz', 'zza')  // false
//vaildAnagram("rat", "car")  // false
//vaildAnagram('awesome', 'awesom')   // false
vaildAnagram('qwerty', 'qeywrt')    // true
//vaildAnagram('texttwisttime', 'timetwisttext')  // true