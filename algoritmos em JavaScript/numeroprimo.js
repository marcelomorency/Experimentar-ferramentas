
var num  = parseInt(prompt("Digite ate que numero: "));


       function primeNumbers(num) {
            let numbers = new Array();
            for (var i = 0; i <= num; i++) {
                if (isPrime(i)){
                numbers.push(i);
                }
            }
        return numbers;
            }
       function isPrime(num) {
            for(let i = 2; i <num; i++)
                if(num % i === 0) {
                    return false
                };
            return num > 1;
            }
        document.write(primeNumbers(num));
