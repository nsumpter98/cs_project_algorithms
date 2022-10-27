

export default class NSXT_SortAlgorithms{

    static generateRandomArray(size) {
        let arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(Math.floor(Math.random() * size));
        }
        return arr;
    }

    static runAllAlgorithms(arr) {
        let insertionSort = NSXT_SortAlgorithms.insertionSort(arr);
        let bubbleSort = NSXT_SortAlgorithms.bubbleSort(arr);
        let mergeSort = NSXT_SortAlgorithms.timeMergeSort(arr);
        let quickSort = NSXT_SortAlgorithms.quickSortNonRecursive(arr);
        let radixSort = NSXT_SortAlgorithms.radixSortNonRecursive(arr);

        return {insertionSort, bubbleSort , mergeSort, quickSort, radixSort};
    }

//iterative radix sort
    static radixSortNonRecursive(arr) {

        let start = new Date();

        let max = this.findMax(arr);
        let maxDigits = this.digitCount(max);
        let digitBuckets = [];

        for (let k = 0; k < maxDigits; k++) {
            for (let i = 0; i < 10; i++) {
                digitBuckets[i] = [];
            }

            for (let j = 0; j < arr.length; j++) {
                let digit = this.getDigitFrom(arr[j], k);
                digitBuckets[digit].push(arr[j]);
            }

            arr = [].concat(...digitBuckets);
        }

        let end = new Date();

        return {arr, time: ((end - start) ) / 1000};
    }

    static getDigitFrom(num, place) {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    }

    static digitCount(max) {
        let count = 0;
        while (max > 0) {
            max = Math.floor(max / 10);
            count++;
        }
        return count;
    }

    static findMax(arr) {
        let max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }



    static insertionSort(arr) {
        let start = (new Date());
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let el = arr[i];
            let j;

            for (j = i - 1; j >= 0 && arr[j] > el; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = el;
        }
        let end = (new Date());

        console.log("Insertion Sort: " + (((end - start))/1000) + "s");

        return {arr, time: ((end - start) ) / 1000};
    }

    static bubbleSort(arr) {
        let start = new Date();


        let len = arr.length;
        for (let i = len-1; i>=0; i--){
            for(let j = 1; j<=i; j++){
                if(arr[j-1]>arr[j]){
                    let temp = arr[j-1];
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        let end = new Date();



        console.log("Bubble Sort: " + (((end - start))/1000) + "s");

        return {arr, time: ((end - start) ) / 1000};
    }

    static timeMergeSort(arr) {
        let start = new Date();

        let payload = this.mergeSortNonRecursive(arr);
        let end = new Date();

        console.log("Merge Sort: " + (((end - start))/1000) + "s");

        return {arr: payload, time: ((end - start) ) / 1000};
    }

    /*static mergeSort(arr) {

        if (arr.length < 2) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);


        return NSXT_SortAlgorithms.merge(NSXT_SortAlgorithms.mergeSort(left), NSXT_SortAlgorithms.mergeSort(right));
    }

    static merge(mergeSort1, mergeSort12) {
        let result = [];

        while (mergeSort1.length && mergeSort12.length) {
            if (mergeSort1[0] <= mergeSort12[0]) {
                result.push(mergeSort1.shift());
            } else {
                result.push(mergeSort12.shift());
            }

        }

        return result.concat(mergeSort1, mergeSort12);
    }

    //non-recursive merge sort
    static mergeSortNonRecursive(arr) {
        let stack = [];
        let start = 0;
        let end = arr.length - 1;
        let middle;

        stack.push(start);
        stack.push(end);

        while (stack.length > 0) {
            end = stack.pop();
            start = stack.pop();

            middle = Math.floor((start + end) / 2);

            if (start < end) {
                stack.push(start);
                stack.push(middle);
                stack.push(middle + 1);
                stack.push(end);
            }
        }



        return arr;
    }*/

    //iterative merge sort
    static mergeSortNonRecursive(arr) {
        let stack = [];
        let start = 0;
        let end = arr.length - 1;
        let middle;

        stack.push(start);
        stack.push(end);

        while (stack.length > 0) {
            end = stack.pop();
            start = stack.pop();

            middle = Math.floor((start + end) / 2);

            if (start < end) {
                stack.push(start);
                stack.push(middle);
                stack.push(middle + 1);
                stack.push(end);
            }
        }

        return arr;
    }

    /*static quickSortTime(arr) {
        let start = new Date();

        let payload = this.quickSortNonRecursive(arr);
        let end = new Date();

        console.log("Quick Sort: " + (((end - start))/1000) + "s");

        return {arr: payload, time: ((end - start) ) / 1000};
    }

    //quicksort function algorithm
    static quickSort(arr) {
        //get milliseconds now

        if (arr.length < 2) {
            return arr;
        }

        let pivot = arr[0];
        let left = [];
        let right = [];

        for (let i = 1; i < arr.length; i++) {
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }


        return  NSXT_SortAlgorithms.quickSort(left).concat(pivot, NSXT_SortAlgorithms.quickSort(right));
    }*/

    //iterative quicksort
    static quickSortNonRecursive(arr) {
        let start1 = new Date();

        //Stack for storing start and end index
        let stack = [];

        //Get the start and end index
        let start = 0;
        let end = arr.length - 1;

        //Push start and end index in the stack
        stack.push({x: start, y: end});

        function partitionHigh(arr, x, y) {
            let pivot = arr[y];
            let i = x - 1;

            for (let j = x; j <= y - 1; j++) {
                if (arr[j] < pivot) {
                    i++;
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }

            let temp = arr[i + 1];
            arr[i + 1] = arr[y];
            arr[y] = temp;

            return i + 1;
        }

        //Iterate the stack
        while(stack.length) {
            //Get the start and end from the stack
            const {x, y} = stack.shift();

            //Partition the array along the pivot
            const PI = partitionHigh(arr, x, y);

            //Push sub array with less elements than pivot into the stack
            if (PI - 1 > x) {
                stack.push({x: x, y: PI - 1});
            }

            //Push sub array with greater elements than pivot into the stack
            if (PI + 1 < y) {
                stack.push({x: PI + 1, y: y});
            }

        }

        let end1 = new Date();

        return {arr, time: ((end1 - start1) ) / 1000};
    }



   /* static radixSort(arr) {
        //get milliseconds now
        let start = new Date();

        let max = Math.max(...arr);
        let exp = 1;
        let radix = 10;
        let buckets = [];
        let result = [];

        while (max / exp > 0) {
            buckets = Array.from({length: radix}, () => []);
            for (let i = 0; i < arr.length; i++) {
                buckets[Math.floor(arr[i] / exp) % radix].push(arr[i]);
            }
            result = [].concat(...buckets);
            exp *= radix;
        }

        let end = new Date();

        console.log("Radix Sort: " + (((end - start))/1000) + "s");
        return {arr: result, time:  ((end - start) ) / 1000};
    }

    //non recursive radix sort
    static radixSortNonRecursive(arr) {
        let start = new Date();

        let max = Math.max(...arr);
        let exp = 1;
        let radix = 10;
        let buckets = [];
        let result = [];

        while (max / exp > 0) {
            buckets = Array.from({length: radix}, () => []);
            for (let i = 0; i < arr.length; i++) {
                buckets[Math.floor(arr[i] / exp) % radix].push(arr[i]);
            }
            result = [].concat(...buckets);
            exp *= radix;
        }

        let end = new Date();

        console.log("Radix Sort: " + (((end - start))/1000) + "s");
        return {arr: result, time:  ((end - start) ) / 1000};
    }
*/



}