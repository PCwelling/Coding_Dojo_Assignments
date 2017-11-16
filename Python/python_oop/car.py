class Car (object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
             self.tax = .15
        else: self.tax = .12
        self.display_all()
    def display_all(self):
        print "Price: {}, Speed: {}, Fuel: {}, Milage: {}mpg, Tax: {}".format(self.price, self.speed, self.fuel, self.mileage, self.tax)

Driver_1 = Car(2000, 35, "Full", 15)
Driver_2 = Car(2000, 5, "Not Full", 105)
Driver_3 = Car(2000, 15, "Kind of Full", 95)
Driver_4 = Car(2000, 25, "Full", 25)
Driver_5 = Car(2000, 45, "Empty", 25)
Driver_6 = Car(20000000, 35, "Empty", 15)

