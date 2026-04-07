---
title: "Python 기본 개념"
sidebar_position: 1
slug: "/python/python-기본-개념"
---


---


### Python과 Java 비교


> 💡 **Python**: 간결하고 읽기 쉬운 문법으로, 줄임표나 중괄호 없이 코드 블록을 들여쓰기(인덴트)로 구분합니다. 따라서 초보자나 비개발자도 비교적 쉽게 접근할 수 있습니다.  
> **Java**: 코드가 다소 길고, 엄격한 중괄호 `{}`와 세미콜론 `;`을 요구합니다. 객체 지향 구조가 강하게 반영되어 있어, 복잡한 애플리케이션에 유리합니다.


|              | **Python**         | **Java**               |
| ------------ | ------------------ | ---------------------- |
| **문법**       | 간결하고 직관적           | 엄격하고 구조적               |
| **타이핑**      | 동적 타입              | 정적 타입                  |
| **메모리 관리**   | 참조 카운트 및 가비지 컬렉션   | 가비지 컬렉션                |
| **실행 속도**    | 느림                 | 빠름                     |
| **패러다임**     | 객체 지향 + 함수형        | 객체 지향 중심               |
| **주요 활용 분야** | 데이터 과학, 웹 개발, 스크립트 | 대규모 서버, 엔터프라이즈 앱, 웹 개발 |


---


### Python의 주요 특징

- **간결하고 읽기 쉬운 코드**: 문법이 간결해 초보자도 쉽게 배울 수 있습니다.
- **플랫폼 독립적**: 윈도우, 맥, 리눅스 등 다양한 OS에서 실행 가능합니다.
- **자동 메모리 관리**: 참조 카운팅과 가비지 컬렉션을 통해 메모리를 자동으로 관리합니다.
- **광범위한 라이브러리 지원**: 데이터 분석, 웹 개발, 과학 연산 등의 분야에서 풍부한 라이브러리를 제공합니다.

---


### 기본 출력 및 입력

- `print()`: 값을 출력하는 함수. 여러 값을 입력 시 콤마로 구분합니다.

    ```python
    print("Hello", "World")  # Hello World
    ```

- `input()`: 사용자 입력을 받는 함수.

    ```python
    name = input("Enter your name: ")
    print("Hello, " + name)
    ```


---


### 변수와 자료형

- **변수**: 데이터를 저장하는 공간이며, `=`를 통해 값을 할당합니다.

    ```python
    age = 25
    ```

- **변수 이름 규칙**:
    - 대소문자를 구분하며 유니코드 지원.
    - 숫자로 시작할 수 없고, 공백은 사용할 수 없습니다.
- **자료형**:
    - **정수(int)**, **실수(float)**, **문자열(str)**, **부울(bool)** 타입이 있으며 `type()` 함수로 확인할 수 있습니다.

---


### 자료형 변환


```python
num = 1
float(num)  # 1.0 (실수)
str(num)    # '1' (문자)
```


---


### 문자열

- 문자열은 큰따옴표(`"`) 또는 작은따옴표(`'`)로 묶어서 표현합니다.
- 여러 줄의 문자열은 따옴표 3개를 사용하여 작성합니다.

---


### 주석 및 포맷팅

- **주석**: `#` 또는 큰따옴표(`"""`)를 3개 사용한 **Docstring**으로 주석을 추가합니다.
- **포맷팅**: `format()` 함수를 통해 문자열을 간편하게 포맷할 수 있습니다.

    ```python
    print("My name is {} and I am {} years old.".format("Alice", 25))
    ```


---


### 인덱싱 및 슬라이싱

- **인덱싱**: 문자열의 특정 위치에 접근할 때 사용합니다.

    ```python
    word = "Python"
    print(word[2])  # 't'
    ```

- **슬라이싱**: 문자열의 일부분을 잘라냅니다.

    ```python
    print(word[1:4])  # 'yth'
    ```


---


### 자료 구조

- **리스트**: 여러 값을 저장하는 구조로, `[]`를 사용하며 **mutable**(변경 가능) 합니다.

    ```python
    fruits = ["apple", "banana", "cherry"]
    ```

- **튜플**: **immutable**(변경 불가) 한 자료구조로, `()`로 선언합니다.

    ```python
    colors = ("red", "blue", "green")
    ```

- **딕셔너리**: 키-값 쌍으로 구성된 자료구조로 `{}` 사용합니다.

    ```python
    person = {"name": "Alice", "age": 25}
    ```


---


### 조건문과 반복문

- **조건문**: 특정 조건에 따라 코드 블록을 실행.

    ```python
    if age > 18:
        print("성인입니다.")
    elif age == 18:
        print("성인에 막 진입했습니다.")
    else:
        print("미성년자입니다.")
    ```

- **반복문**: 특정 코드를 반복 실행.

    ```python
    for fruit in fruits:
        print(fruit)
    
    while age < 30:
        age += 1
    ```


---


### 함수(Function)

- **함수 정의**: `def` 키워드를 사용하여 함수를 정의합니다. 함수명은 소문자로 작성하고, 필요한 인자는 괄호 안에 나열합니다.

```python
def my_function(param1, param2):
    return param1 + param2
```

- **사용 이유**: 함수는 코드의 재사용성을 높이고, 모듈화하여 유지보수를 용이하게 만듭니다.

---


### 논리 연산자와 Membership 연산자

- **논리 연산자**:
    - `and`: 둘 다 참이어야 참
    - `or`: 하나라도 참이면 참
    - `not`: 반대
- **Membership 연산자**:
    - `in`: 포함 여부 확인
    - `not in`: 포함되어 있지 않음을 확인
- **타입 비교**:
    - `type(a) == type(b)`: 두 객체의 타입이 같은지 확인
    - `is`: 두 객체가 같은 메모리 위치를 가리키는지 확인

---


### 함수(Function) 인자

- **기본값 인자**: 인자에 기본값을 설정할 수 있습니다. 기본값은 인자 목록에서 **오른쪽**에 위치해야 합니다.

```python
def greet(name, message="Hello"):
    return f"{message}, {name}!"
```

- **가변 인자**: 함수에 전달할 인자의 개수가 정해지지 않은 경우, `args`와 `*kwargs`를 사용합니다.
    - `args`: 위치 인자들을 튜플로 받습니다.
    - `*kwargs`: 키워드 인자들을 딕셔너리로 받습니다.

```python
def func(*args, **kwargs):
    print(args)
    print(kwargs)
```


### 예외 처리(Exception Handling)


예외 처리는 프로그램의 예기치 않은 오류를 처리하여 프로그램이 종료되지 않도록 합니다.

- **try, except**: 오류가 발생할 수 있는 코드 블록을 `try`로 감싸고, 오류가 발생하면 `except` 블록에서 처리합니다.

```python
try:
    x = 1 / 0
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")
```

- **else, finally**: `else`는 예외가 발생하지 않았을 때 실행되며, `finally`는 예외 발생 여부와 관계없이 항상 실행됩니다.

```python
try:
    x = 1 / 1
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")
else:
    print("성공적으로 계산되었습니다.")
finally:
    print("이 부분은 항상 실행됩니다.")
```


### 파일 입출력(File Input/Output)


파일을 다루는 방법을 이해하면 데이터를 저장하거나 불러오는 작업을 효율적으로 처리할 수 있습니다.

- **파일 열기**: `open()` 함수로 파일을 엽니다. 첫 번째 인자로 파일 경로를, 두 번째 인자로 파일 모드를 지정합니다. (`r`: 읽기, `w`: 쓰기, `a`: 추가 등)

```python
# 파일 열기 (읽기 모드)
file = open('example.txt', 'r')

# 파일 내용 읽기
content = file.read()

# 파일 닫기
file.close()
```

- **파일 쓰기**: `open()` 함수로 파일을 연 후 `write()` 메서드를 사용하여 파일에 내용을 씁니다.

```python
file = open('example.txt', 'w')
file.write("Hello, World!")
file.close()
```

- **`with`** **문**: 파일을 열 때 `with` 문을 사용하면 자동으로 파일을 닫아줍니다.

```python
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
```


### 모듈과 패키지(Modules and Packages)


Python에서는 코드의 재사용성을 높이고 모듈화된 코드 관리를 위해 **모듈**과 **패키지**를 사용합니다.

- **모듈**: 하나의 Python 파일로 구성된 모듈은 함수, 클래스, 변수 등을 포함할 수 있습니다.
    - 모듈을 가져올 때 `import` 키워드를 사용합니다.
    - 예: `import math` (math 모듈을 가져옵니다)

```python
import math
result = math.sqrt(16)  # 4.0
```

- **패키지**: 여러 모듈이 하나의 디렉토리 구조로 구성된 것을 패키지라고 합니다.
    - 패키지는 디렉토리 내에 `__init__.py` 파일을 포함해야 패키지로 인식됩니다.

```python
from my_package import my_module
```


### 리스트 컴프리헨션(List Comprehension)


리스트 컴프리헨션은 리스트를 간결하고 효율적으로 생성할 수 있는 방법입니다.

- **기본 문법**: 리스트의 각 항목에 대해 조건을 추가하거나 변형하여 새로운 리스트를 생성할 수 있습니다.

```python
# 1부터 10까지의 숫자 중 짝수만 추출
even_numbers = [x for x in range(1, 11) if x % 2 == 0]
print(even_numbers)  # [2, 4, 6, 8, 10]
```


### 람다 함수(Lambda Functions)


람다 함수는 간단한 함수 정의를 한 줄로 작성할 수 있는 방법입니다.

- **문법**: `lambda` 키워드를 사용하여 함수를 정의합니다.

```python
# 두 숫자의 합을 반환하는 람다 함수
add = lambda x, y: x + y
print(add(2, 3))  # 5
```

- **특징**:
    - **간결함**: 짧은 코드로 작성할 수 있어 가독성이 좋음.
    - **일회성 사용**: 간단한 로직에 주로 사용되며, 복잡한 함수에는 일반 함수를 사용하는 것이 좋음.
    - **익명 함수**: 이름이 없는 함수로, 필요할 때만 사용할 수 있음.
- **사용 예시**: `map(), filter(), sorted()` 파이썬 내장 함수.
    - **`map()`**: 리스트의 각 요소에 람다 함수를 적용

    ```python
    numbers = [1, 2, 3, 4]
    doubled = list(map(lambda x: x * 2, numbers))  # [2, 4, 6, 8]
    ```

    - **`filter()`**: 조건을 만족하는 요소만 필터링

    ```python
    odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))  # [1, 3]
    ```

    - **`sorted()`**: 특정 키에 따라 정렬

    ```python
    pairs = [(1, 'one'), (2, 'two'), (3, 'three')]
    sorted_pairs = sorted(pairs, key=lambda x: x[1])  # [('1', 'one'), (2, 'two'), (3, 'three')노셔
    ```


### 제너레이터(Generators)


제너레이터는 데이터를 한 번에 메모리에 모두 로드하지 않고, 필요한 데이터를 그때그때 생성하는 방식입니다.

- **`yield`**: 함수에서 `yield`를 사용하면 함수가 일시적으로 반환하고, 이후 다시 호출되었을 때 그 지점부터 실행을 재개합니다.

```python
def my_generator():
    yield 1
    yield 2
    yield 3

gen = my_generator()
for value in gen:
    print(value)
```


### 데코레이터(Decorators)


데코레이터는 다른 함수를 수정하거나 확장할 수 있는 함수입니다.

- **문법**: 데코레이터는 함수 위에 `@` 기호를 사용하여 적용합니다.

```python
def decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@decorator
def my_function():
    print("Hello, World!")

my_function()
```


### 클래스(Class)


Python은 **객체 지향 프로그래밍**을 지원하며, 클래스를 사용하여 객체를 정의할 수 있습니다.

- **클래스 정의**: `class` 키워드를 사용하여 클래스를 정의합니다.

```python
class Person:
    def say_hello(self):
        print("Hello!")

# 클래스 자체 호출 ❌ (에러 발생)
# Person.say_hello()

# 객체 생성 후 호출 ✅
p = Person()
p.say_hello()
```

- **상속**: Python에서는 클래스 간에 상속을 통해 기능을 확장할 수 있습니다.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"My name is {self.name} and I am {self.age} years old."
        
class Student(Person):  # 🔥 Person을 상속
    def __init__(self, name, age, grade):
        super().__init__(name, age)  # 🔥 부모(Person)의 생성자 호출
        self.grade = grade

    def introduce(self):
        return f"{super().introduce()} I am in grade {self.grade}."  # 🔥 부모 메서드 호출 후 확장
        
student = Student("Bob", 16, 10)
print(student.introduce())  

# 출력: My name is Bob and I am 16 years old. I am in grade 10.
```

