# odd/even
def odd_even(num):
    for i in range(1, num+1):
        if i % 2 == 1:
            print "number is", i, "this is an odd number"
        else: 
            print "number is", i,"this is an even number"
odd_even(10)

# Multiply
def multiply(arr,num):
    for x in range(len(arr)):
        arr[x] *= num
    return arr
a = [2,4,10,16]
b = multiply(a,5)
print b

# Hacker Challenge
def layered_multiples(arr):
    new_array = []
    for x in arr:
        val_arr = []
        for i in range(0,x):
            val_arr.append(1)
        new_array.append(val_arr)  
    return new_array

x = layered_multiples(multiply([2,4,5],3))
print x