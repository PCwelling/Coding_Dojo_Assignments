import random

def scoresGrades(num):
    for i in range(1, num+1):
        rnum = random.randint(60, 101)
        if rnum < 69:
            print "Score: ", rnum, "Your grade is D"    
        elif rnum >= 70 or rnum <79:
            print "Score: ", rnum, "Your grade is C"
        elif rnum >=80 or rnum <89:
            print "Score: ", rnum, "Your grade is B"        
        elif rnum >=90 or ranum <100:
            print "Score: ", rnum, "Your grade is A"
    print "End of the program, Bye!"
    return

scoresGrades(5)

