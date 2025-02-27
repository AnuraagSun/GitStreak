function generateRandomCCode() {
  const snippets = [
    // Prime number checker
    `#include <stdio.h>
int isPrime(int n) {
  if (n <= 1) return 0;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) return 0;
  }
  return 1;
}
int main() {
  int num = ${Math.floor(Math.random() * 100)};
  printf("%d is %sprime.\\n", num, isPrime(num) ? "" : "not ");
  return 0;
}`,

    // Matrix addition
    `#include <stdio.h>
int main() {
  int a[2][2] = { {${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 10)}},
                  {${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 10)}} };
  int b[2][2] = { {${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 10)}},
                  {${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 10)}} };
  int c[2][2];
  for (int i = 0; i <
