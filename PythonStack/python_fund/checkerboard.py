# Easy Method
# red = "* * * * "
# black = " * * * *"
# for i in range(4):
#     print red
#     print black        

# Complex Method
count = 0
for i in range(8):
    if count % 2 != 0:
        print "* " * 5
    elif count % 2 == 0:
        print " *" * 5
    count = count + 1