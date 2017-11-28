# Find Characters
#input
word_list = ["hello", "world", "my" "name", "is", "Anna"]
char = "o"
#code
new_list = []
for i in word_list:
    if i.find(char) > -1:
        new_list.append([i])

#output
print new_list