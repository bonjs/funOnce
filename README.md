# funOnce

### 多次执行相同函数时，　只执行一次
#### 调用方式
~~~ javascript
function test1() {
  console.log('test1');
}
function test2() {
  console.log('test2');
}
function test3() {
  console.log('test3');
}
function test4() {
  console.log('test4');
}

funOnce.add(test1);
funOnce.add(test2);
funOnce.add(test3);
funOnce.add(test4);
~~~
