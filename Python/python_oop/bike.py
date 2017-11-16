class Bike(object):
    def __init__(self, price, max_speed, miles):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayinfo(self):
        print self.price, self.max_speed, self.miles
    def ride(self):
        print "Riding"
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing"
        if self.miles > 0:
            self.miles -= 5
        return self
rider_1 = Bike(250, 25, 1000)
rider_1.ride().ride().ride().reverse().displayinfo()
rider_2 = Bike(75, 5, 50)
rider_2.ride().ride().reverse().reverse().displayinfo()
rider_3 = Bike(2000, 40, 100)
rider_3.reverse().reverse().reverse().displayinfo()      