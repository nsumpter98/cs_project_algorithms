

export default class NSXT_SortAlgorithms{

    static insertionSort(arr) {
        let start = new Date().getTime();

        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let el = arr[i];
            let j;

            for (j = i - 1; j >= 0 && arr[j] > el; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = el;
        }
        let end = new Date().getTime();


        return {arr, time: end - start};
    }

     static bubbleSort(arr) {
        let start = new Date().getTime();

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
        let end = new Date().getTime();

        return {arr, time: end - start};
    }

    static mergeSort(arr) {
        let start = new Date().getTime();

        if (arr.length < 2) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        let end = new Date().getTime();

        return {arr: NSXT_SortAlgorithms.merge(NSXT_SortAlgorithms.mergeSort(left), NSXT_SortAlgorithms.mergeSort(right)), time: end - start};
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

    static quickSort(arr) {
        let start = new Date().getTime();

        if (arr.length < 2) {
            return arr;
        }

        let pivot = arr[0];
        let less = [];
        let greater = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                less.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }

        let end = new Date().getTime();

        return {arr: NSXT_SortAlgorithms.quickSort(less).concat(pivot, NSXT_SortAlgorithms.quickSort(greater)), time: end - start};
    }

    static radixSort(arr) {
        let start = new Date().getTime();

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

        let end = new Date().getTime();

        return {arr: result, time: end - start};
    }
}