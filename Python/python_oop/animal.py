class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 50
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -=5
        return self
    def disp_health(self):
        print self.health
        return self

class Dog(Animal):
    def __init__(self, name):
        super(Dog,self).__init__(name)
        self.health = 150
    def pet(self):
        self.health += 5

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        self.health -=10
    def disp_health(self):
        print "I am a Dragon"
        super(Dragon,self).disp_health()

        
animal1= Animal("Barney")
animal1.walk().walk().walk().run().run().disp_health()        

dog1 = Dog("Fiddo")
dog1.walk().walk().walk().run().run().disp_health()

dragon1 = Dragon("Fred")
dragon1.disp_health()

dog1.disp_health().fly()

                