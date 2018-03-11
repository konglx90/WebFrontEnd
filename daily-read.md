## 18-02-22

#### 如何解决一个问题?

1. 理解问题
2. 思考方法
3. 执行计划
4. 回顾

#### 如何写测试用例

[wiki](https://www.cs.cmu.edu/~112/notes/notes-testing-and-exceptions.html)

>> Writing test cases is part of the process of understanding a problem; if you don't know what the result of an example input should be, you can't know how to solve the problem


1. normal cases
2. large cases
3. edge cases
4. special cases
5. varying cases

```python
# example
def testIsPrime():
    print("Testing isPrime()...")
    assert(isPrime(-1) == False)  # negative
    assert(isPrime(0) == False)   # zero
    assert(isPrime(1) == False)   # 1 is quite the special case
    assert(isPrime(2) == True)    # 2, only even prime
    assert(isPrime(3) == True)    # 3, smallest odd prime
    assert(isPrime(4) == False)   # 4, smallest even non-prime
    assert(isPrime(9) == False)   # 9, perfect square of odd prime
    assert(isPrime(987) == False) # somewhat larger non-prime
    assert(isPrime(997) == True)  # somewhat larger prime
    print("Passed!")
```

#### Debugging

[wiki](https://www.cs.cmu.edu/~112/notes/notes-debugging.html)

1. Avoiding Bugs

- Write code with good style.
- Write tests before writing functions, and test as you go.
- Make sure each function only has one task.
- Avoid copying and pasting code at all costs (this leads to bug propagation).

2. types of Bug

- Syntax Errors
- Runtime Errors
- Logical Errors

#### code style

[wiki](https://www.cs.cmu.edu/~112/notes/notes-style.html)
