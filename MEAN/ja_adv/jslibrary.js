var _ = {
    // map: function(arr,callback) {
    //   //code here;
    //     callback()
    // },


    reduce: function(arr, callback) { 
      // code here;
      for(i=0; i<arr.length; i++){
         var memo =
          if(callback(memo,num)){
              return memo+num
          }   
      }
    },


    find: function(arr, callback) {   
      // code here;
      var i = arr[0]
      while(i<arr.length){
        var num = arr[i];
        if(callback(num)){
            return num;
        }
        i++
      }
    },


    filter: function(arr,callback) { 
      // code here;
        var newarr = []
        for(i=0; i<arr.length; i++){
            var num = arr[i];
            if(callback(num)){
            newarr.push(num);
        } 
      }
      return newarr;
    },


    reject: function(arr, callback) { 
      // code here;
      var newarr = []
      for(i=0; i<arr.length; i++){
          var num = arr[i];
          if(!callback(num)){
          newarr.push(num);
            } 
        }
        return newarr;
    }


  }
 // you just created a library with 5 methods!

 
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
