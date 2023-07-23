function isPalindrome(data) {
    
    const str = data.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let i = 0, a = str.length - 1; i < a; i++, a--) {
      if (str[i] !== str[a]) {
        return false;
      }
    }
  
    return true;
  }
  
  const inputString = "nun";
  console.log(isPalindrome(inputString));
  