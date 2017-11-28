#type list assignment
def typeList (x):
    sum = 0
    newstr =""
    for i in x:
        if isinstance(i, (int, float)):
            sum = sum + i
        if isinstance(i, str):
            newstr = newstr + i
    print sum
    print newstr

typeList(["magical unicorns", 19, "hello", 98.98, "world"])