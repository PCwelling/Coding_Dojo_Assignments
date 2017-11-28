def maktup(my_dict):  
    my_dict = {
        "Speros": "(555) 555-5555",
        "Michael": "(999) 999-9999",
        "Jay": "(777) 777-7777"
    }
    tup = []
    for k, v in my_dict.iteritems():
        tup.append((k,v))
    print tup
maktup({
        "Speros": "(555) 555-5555",
        "Michael": "(999) 999-9999",
        "Jay": "(777) 777-7777"
    })