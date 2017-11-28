#find and replace

words = "It's Thanksgiving day. It's my birthday, too!"
print words.find("day"),  words.replace("day", "month")

#min and max

x=[2,54,-2,7,12,98]
def min_max(list):
    print min(list), max(list)
min_max(x)

#first and last

x=["hello", 2, 54, -2, 7, 12, 98, "world"]
def first_last(list):
    print list[0], list[len(list)-1]
first_last(x)

#new list

x=[19, 2, 54, -2, 7, 12, 98, 32, 10, -3, 6]
def new_list(list):
    list.sort()
    First_list = list[:len(list)/2]
    Second_list = list[len(list)/2:]
    print "First list {}, Second list {}".format(First_list, Second_list)
    Second_list.insert(0, First_list)
    print Second_list 
new_list(x)    