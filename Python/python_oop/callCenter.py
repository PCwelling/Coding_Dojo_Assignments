count = 0
calllist = []

class Call(object):
    def __init__(self, name, phone, time, reason):
        self.name = name
        self.phone = phone
        self.toc = time
        self.rfc = reason
        self.unique_id = self.name[0],count+1        
    def calls(self):
        c = "Call Time: {}, Unique ID: {}, Name: {}, Phone # {}, Reason: {}".format(self.toc, self.unique_id, self.name, self.phone, self.rfc) 
        print c

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.quesize = len(calllist)
    def add(self):
        #add a new call to the call list
        calllist.append(c)
        print c
        return self
    def remove(self):
        #remove a call from the fornt of the list
        calllist.pop[0]
        return self
    def info(self):
        #print self.name, self.phone and self.quesize
        return self

call1 = Call("Johnson", "(808)352-4106","12:04PM", "murder")
        