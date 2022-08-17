                                        //Q.2  SET METHOD:
    // You are given a string (STR) of length N, consisting of only the lower case English alphabet.
    // Your task is to remove all the duplicate occurrences of characters in the string.
    // Input:
    // abcadeecfb
    // Output:
    // abcdef"

    var s='abcadeecfb';
    var n=s.length;
    var set=new Set();
    for(let i=0;i<n;i++){
        set.add(s.charAt(i));
    }
    console.log(set);
    