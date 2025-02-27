function generateRandomCCode() {
  // Array of C code snippets
  const snippets = [
    // 1. Prime number checker with random input
    `#include <stdio.h>
int isPrime(int n) {
  if (n <= 1) return 0;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) return 0;
  }
  return 1;
}
int main() {
  int num = ${Math.floor(Math.random() * 100) + 1};
  printf("%d is %sprime.\\n", num, isPrime(num) ? "" : "not ");
  return 0;
}`,

    // 2. Matrix addition with random 2x2 matrices
    `#include <stdio.h>
int main() {
  int a[2][2] = { {${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 10)}},
                  {${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 10)}} };
  int b[2][2] = { {${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 10)}},
                  {${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 10)}} };
  int c[2][2];
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
      c[i][j] = a[i][j] + b[i][j];
    }
  }
  printf("Resultant Matrix:\\n");
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
      printf("%d ", c[i][j]);
    }
    printf("\\n");
  }
  return 0;
}`,

    // 3. Factorial using recursion with random input
    `#include <stdio.h>
unsigned long long factorial(int n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}
int main() {
  int num = ${Math.floor(Math.random() * 10) + 1};
  printf("Factorial of %d is %llu\\n", num, factorial(num));
  return 0;
}`,

    // 4. Linked list insertion and traversal with random nodes
    `#include <stdio.h>
#include <stdlib.h>
struct Node {
  int data;
  struct Node* next;
};
struct Node* insertNode(struct Node* head, int data) {
  struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
  newNode->data = data;
  newNode->next = head;
  return newNode;
}
void printList(struct Node* head) {
  struct Node* temp = head;
  while (temp != NULL) {
    printf("%d ", temp->data);
    temp = temp->next;
  }
  printf("\\n");
}
int main() {
  struct Node* head = NULL;
  head = insertNode(head, ${Math.floor(Math.random() * 100)});
  head = insertNode(head, ${Math.floor(Math.random() * 100)});
  head = insertNode(head, ${Math.floor(Math.random() * 100)});
  printf("Linked List: ");
  printList(head);
  return 0;
}`,

    // 5. Stack implementation using array with random operations
    `#include <stdio.h>
#define MAX_SIZE 10
int stack[MAX_SIZE];
int top = -1;
void push(int value) {
  if (top < MAX_SIZE - 1) {
    stack[++top] = value;
  }
}
int pop() {
  if (top >= 0) {
    return stack[top--];
  }
  return -1;
}
int main() {
  push(${Math.floor(Math.random() * 100)});
  push(${Math.floor(Math.random() * 100)});
  push(${Math.floor(Math.random() * 100)});
  printf("Popped values: %d, %d\\n", pop(), pop());
  return 0;
}`,

    // 6. Binary search on a random sorted array
    `#include <stdio.h>
int binarySearch(int arr[], int size, int target) {
  int left = 0, right = size - 1;
  while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
int main() {
  int arr[] = {${Array.from({ length: 5 }, () => Math.floor(Math.random() * 50)).sort((a, b) => a - b).join(', ')}};
  int size = sizeof(arr) / sizeof(arr[0]);
  int target = ${Math.floor(Math.random() * 50)};
  int result = binarySearch(arr, size, target);
  printf("Target %d is %sfound at index %d\\n", target, result != -1 ? "" : "not ", result);
  return 0;
}`,

    // 7. Fibonacci sequence generator with random length
    `#include <stdio.h>
void fibonacci(int n) {
  int a = 0, b = 1, c;
  printf("Fibonacci Sequence: %d %d ", a, b);
  for (int i = 2; i < n; i++) {
    c = a + b;
    printf("%d ", c);
    a = b;
    b = c;
  }
  printf("\\n");
}
int main() {
  int length = ${Math.floor(Math.random() * 5) + 5};
  fibonacci(length);
  return 0;
}`,

    // 8. GCD calculation using Euclidean algorithm with random inputs
    `#include <stdio.h>
int gcd(int a, int b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}
int main() {
  int a = ${Math.floor(Math.random() * 100) + 1};
  int b = ${Math.floor(Math.random() * 100) + 1};
  printf("GCD of %d and %d is %d\\n", a, b, gcd(a, b));
  return 0;
}`,
  ];

  // Select a random snippet
  const randomIndex = Math.floor(Math.random() * snippets.length);
  return snippets[randomIndex];
}
