def filterByType (x):
    if isinstance(x, int): 
        if x<= 99:
            print "That's a small number."
        elif x >=100: print "That's a big number."
    if isinstance(x, str):
        if len(x) <49:
            print "That's a short sentance."
        elif len(x) >=50: print "That's a long sentence."
    if isinstance(x, list):
        if len(x) <9:
            print "That's a short list."
        elif len(x) >=10: print "That's a big list."
    return


filterByType([12, 13, 15, "hello", 27])