function primo(n) {
    if (n <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  