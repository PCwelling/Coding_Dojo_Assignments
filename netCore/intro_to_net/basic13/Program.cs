using System;

namespace basic13
{
    class Program
    {
            //// Print 1- 255 ////
            public static void printTo255(){
                for(int i = 0; i<256; i++){
                    Console.WriteLine(i);
                }
            } 
            //// Print odds ////
            public static void printOdds(){
                for(int i = 0; i<256; i++){
                    if(i % 2 != 0){
                        Console.WriteLine(i);
                    }
                }
            }
            //// Print Sum ////
            public static void printSum(){
                int sum = 0;
                for(int i = 0; i<256; i++){
                    sum = sum + i;
                    Console.WriteLine("New Number: {0} Sum: {1}", i, sum);
                }
            }
            //// Iterate through an array ////
            public static void iterateArray(int[] arr){
                for(int i =0; i<arr.Length; i++){
                    Console.WriteLine(arr[i]);
                }
            }
            //// Find Max ////
            public static void findMax(int[] arr){
                int max = arr[0];
                for(int i = 0; i<arr.Length; i++){
                    if(max < arr[i]){
                        max = arr[i];
                    }
                }
                Console.WriteLine(max);
            }
            //// Get Average ////
            public static void getAvg(int[] arr){
                int sum = 0;
                int avg = 0;
                for(int i = 0; i<arr.Length; i++){
                    sum = sum + arr[i];
                    }
                avg = sum / arr.Length;
                Console.WriteLine(avg);
            } 
            ////  Array with Odd ////
            public static void oddArray(){
                int[] arr = new int[255/2 + 1];
                int c = 1;
                for(int i = 0; i < 255/2 + 1; i++){
                    arr[i] = c;
                    c+=2;
                }
                Console.WriteLine(arr);
            }
            //// Greater than Y ////
            public static void gtY(int[] arr, int y){
                int count = 0;
                for(int i = 0; i < arr.Length; i++){
                    if(arr[i] > y){
                        count = count + 1;
                    } 
                }
                Console.WriteLine(count);
            }
            //// Square Values ////
            public static void squareVal(int[] arr){
                for(int i = 0; i < arr.Length; i++){
                    arr[i] = arr[i] * arr[i];
                }
                Console.WriteLine(arr);

            }
            //// Eliminate Negatives ////
            public static void noNeg(int []arr){
                for(int i = 0; i < arr.Length; i++){
                    if(arr[i] < 0){
                        arr[i] = 0;
                    }
                }
                Console.WriteLine(arr);
            }
            //// Min, Max, Avg ////
            public static void minMaxAvg(int[] arr){
                int min = arr[0];
                int max = arr[0];
                int sum = 0;
                int avg = 0;
                for(int i = 0; i < arr.Length; i++){
                    if(min > arr[i]){
                        min = arr[i];
                    }
                    if(max < arr[i]){
                        max = arr[i];
                    }
                    sum = sum + arr[i];
                }
                avg = sum / arr.Length;
                Console.WriteLine("The min is: {0}, the max is: {1}, the avg: is: {2}", min, max, avg);
            }
            //// Shift Values ////
            public static void shiftVal(int[] arr){
                for(int i = 0; i < arr.Length; i++){
                    arr[i] = arr[i]+1;
                    arr[arr.Length-1] = 0;
                }
                Console.WriteLine(arr[arr.Length-1]);
            }
            //// Number to string ////
            public static void numString(int[] arr){
                object[] newArr = new object[arr.Length];
                for(int i = 0; i< arr.Length; i++){
                    if(arr[i] < 0){
                        newArr[i] = "Dojo";   
                    }else{
                        newArr[i] = arr[i];
                    }
                }
                Console.WriteLine(newArr);
            }


    ////__________________________________________________________////
        static void Main(string[] args)
        {
            ////printTo255();
            ////printOdds();
            ////printSum();
            ////iterateArray(new int[] {1,3,5,7,9,13});
            ////findMax(new int[] {-1,-3,-5,});
            ////getAvg(new int[] {1,3,5,7,9,13});
            ////oddArray();
            ////gtY(new int[] {1,3,5,7,9,13}, 6);
            ////squareVal(new int[] {1,3,5,7,9,13});
            ////noNeg(new int[] {1,5,10,-2});
            ////minMaxAvg(new int[] {1,3,5,7,9,13});
            ////shiftVal(new int[] {1,5,10,7,-2});
            numString(new int[] {-1, -3, 2});





        ////_____________________________________________________________________________________////    
        }
    }
}
