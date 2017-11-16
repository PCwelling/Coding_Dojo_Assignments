# Part 1
class MathDojo(object):
    def __init__(self):
        self.result = 0
    def add(self,*val):
        for t in val:
            if type(t) == list or type(t) == tuple:
                for k in t:
                    self.result += k
            else:
                self.result += t
        return self    
    def subtract(self,*val):
        for t in val:
            if type(t) == list or type(t) == tuple:
                for k in t:
                    self.result += k
            else:
                self.result -= t
        return self

md = MathDojo()
print md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result

