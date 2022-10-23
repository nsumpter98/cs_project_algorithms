

export default class NSXT_SortAlgorithms{

    static insertionSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let el = arr[i];
            let j;

            for (j = i - 1; j >= 0 && arr[j] > el; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = el;
        }
        console.log(arr);
        return arr;
    }

     static bubbleSort(arr) {
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
        console.log(arr);
        return arr;
    }

    static mergeSort(arr) {
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

    static quickSort(arr) {
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

        return NSXT_SortAlgorithms.quickSort(less).concat(pivot, NSXT_SortAlgorithms.quickSort(greater));
    }

    static radixSort(arr) {
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

        return result;
    }
}