def dictbasic (dic):
    for key,data in dic.iteritems():
        print "My ", key, " is ", data

dictbasic({"name":"anna", "age":101, "country of birth": "United States", "favorite language": "python"})