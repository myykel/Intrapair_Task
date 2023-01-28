function firstRecurringCharacter(str) {
    const set = new Set();
    for (let i = 0; i < str.length; i++) {
      if (set.has(str[i])) {
        return str[i];
      } else {
        set.add(str[i]);
      }
    }
    return null;
  }
  console.log(firstRecurringCharacter("abcdefgh")); // returns null
  console.log(firstRecurringCharacter("abcaefgh")); // returns "a"
  
