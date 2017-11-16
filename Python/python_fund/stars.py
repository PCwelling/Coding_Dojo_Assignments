# part 1
def stars(list):
    for i in range(len(list)):
        print "*" * list[i]
        

stars([2,3,4])

# part 2
def stars2(list):
    for i in range(len(list)):
        if type(list[i]) == int:    
            print "*" * list[i]
        if type(list[i]) == str:
            print (list[i][0] * len(list[i])).lower()
        
        
stars2([4,"Tom",1,"Michael",5,7,"Jimmy Smith"])
