import random

def coinToss(num):
    
    hc = 0
    tc = 0

    for i in range(1, num+1):
        rnum = random.randint(1, 2)
        if rnum == 1:
            hc = hc + 1
            print "Attempt: ", i, "It's heads: total is heads ", hc, " Tails ", tc, "so far"
        elif rnum == 2:
            tc = tc +1
            print "Attempt: ", i, "It's tails: total is heads ", hc, " Tails ", tc, "so far"

    print "Done flipping!"
    return

coinToss(5)

