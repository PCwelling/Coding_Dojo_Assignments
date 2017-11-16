class Product (object):
    def __init__(self, price, item_name, weight, brand):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = "For Sale"
    def sell (self):
        self.status = "Sold"
        return self.status
    def add_tax (tax):
        sale_price = self.price * tax
        return sale_price
    def return_merch(reason):
        if reason == defective:
            self.status = defective
            self.price = 0
        elif reason == "new, in box":
            self.status = "For Sale"
        elif reason == "open box":
            self.status = "Opened"
            self.price = self.price * .8
        return self
    def display_info(self):
        print "Price: {}, Name: {}, Weight: {}, Brand: {}, Status: {}".format(self.price, self.item_name, self.weight, self.brand, self.status)

            
            
        

    