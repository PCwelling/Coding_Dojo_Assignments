# Get 1 to 255
def get_array():
    my_list = []
    for count in range(1,256):
        my_list.append(count)
    print my_list

get_array()

# Get even 1000
def sum_even_numbers():
    sum = 0
    for count in range(0,1000,2):
        sum = sum + count
    return sum

sum_even_numbers()
