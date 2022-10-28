package com.example;

import com.google.cloud.functions.HttpFunction;
import com.google.cloud.functions.HttpRequest;
import com.google.cloud.functions.HttpResponse;
import java.io.BufferedWriter;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.io.PrintWriter;

public class Example implements HttpFunction {

 public static class RunAlgorithm extends Thread {
        private int num;
        private double[] payload = new double[5];

        public RunAlgorithm(int num) {
            this.num = num;
        }

        public void run() {
            int[] arr = new int[num];
            for (int i = 0; i < arr.length; i++) {
                arr[i] = (int) (Math.random() * (100 - 1));
            }
            //quicksort
            long startTime = System.nanoTime();
            quicksort(arr, 0, arr.length - 1);
            long endTime = System.nanoTime();
            long duration = (endTime - startTime);
            System.out.println("quicksort: " + duration);
            payload[0] = duration;
            //writer.write("\n quick duration: " + duration);

            //insertion sort
            startTime = System.nanoTime();
            insertionSort(arr);
            endTime = System.nanoTime();
            duration = (endTime - startTime);
            System.out.println("insertion sort: " + duration);
            payload[1] = duration;
            // writer.write("\n insert duration: " + duration);

            //bubble sort
            startTime = System.nanoTime();
            bubbleSort(arr);
            endTime = System.nanoTime();
            duration = (endTime - startTime);
            System.out.println("bubble sort: " + duration);
            payload[2] = duration;
            // writer.write("\n bubble duration: " + duration);

            //merge sort
            startTime = System.nanoTime();
            mergeSort(arr, 0, arr.length - 1);
            endTime = System.nanoTime();
            duration = (endTime - startTime);
            System.out.println("merge sort: " + duration);
            payload[3] = duration;

            //radix sort
            startTime = System.nanoTime();
            radixSort(arr);
            endTime = System.nanoTime();
            duration = (endTime - startTime);
            System.out.println("radix sort: " + duration);
            //writer.write("\n radix duration: " + duration);
            payload[4] = duration;

        }

        public int getNum() {
            return num;
        }

        public double[] getPayload() {
            return payload;
        }



    }

    public static void quicksort(int[] arr, int left, int right) {
        if (left < right) {
            int pivot = partition(arr, left, right);
            quicksort(arr, left, pivot - 1);
            quicksort(arr, pivot + 1, right);
        }
    }

    public static int partition(int[] arr, int left, int right) {
        int pivot = arr[right];
        int i = left - 1;
        for (int j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[right];
        arr[right] = temp;
        return i + 1;
    }

    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    //bubble sort algorithm
    public static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    //merge sort algorithm
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int middle = (left + right) / 2;
            mergeSort(arr, left, middle);
            mergeSort(arr, middle + 1, right);
            merge(arr, left, middle, right);
        }
    }

    public static void merge(int[] arr, int left, int middle, int right) {
        int n1 = middle - left + 1;
        int n2 = right - middle;
        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];
        for (int i = 0; i < n1; i++) {
            leftArr[i] = arr[left + i];
        }
        for (int i = 0; i < n2; i++) {
            rightArr[i] = arr[middle + 1 + i];
        }
        int i = 0;
        int j = 0;
        int k = left;
        while (i < n1 && j < n2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }

    //radix sort algorithm
    public static void radixSort(int[] arr) {
        int max = getMax(arr);
        for (int exp = 1; max / exp > 0; exp *= 10) {
            countSort(arr, exp);
        }
    }

    public static int getMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    public static void countSort(int[] arr, int exp) {
        int[] output = new int[arr.length];
        int[] count = new int[10];
        for (int i = 0; i < arr.length; i++) {
            count[(arr[i] / exp) % 10]++;
        }
        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        for (int i = arr.length - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }
        for (int i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    }




  @Override
  public void service(HttpRequest request, HttpResponse response) throws IOException  {
      response.appendHeader("Access-Control-Allow-Origin", "*");

    if ("OPTIONS".equals(request.getMethod())) {
      response.appendHeader("Access-Control-Allow-Methods", "GET");
      response.appendHeader("Access-Control-Allow-Headers", "Content-Type");
      response.appendHeader("Access-Control-Max-Age", "3600");
      response.setStatusCode(HttpURLConnection.HTTP_NO_CONTENT);
      return;
    }
   // BufferedWriter writer = response.getWriter();
    var writer = new PrintWriter(response.getWriter());
 //   writer.write("starting");
/*
 String count = System.getenv("count");
    if (count == null) {
      count = "Specified environment variable is not set.";
    }

     int num = Integer.parseInt(count);

     int[] arr = new int[num];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) (Math.random() * (100 - 1));
        }
      //  runAllAlgorithms(num);
*/

        RunAlgorithm runAlgorithm = new RunAlgorithm(1000);
        RunAlgorithm runAlgorithm1 = new RunAlgorithm(10000);
        RunAlgorithm runAlgorithm2 = new RunAlgorithm(50000);
        RunAlgorithm runAlgorithm3 = new RunAlgorithm(100000);
        RunAlgorithm runAlgorithm4 = new RunAlgorithm(500000);
        RunAlgorithm runAlgorithm5 = new RunAlgorithm(1000000);


        runAlgorithm.start();
        runAlgorithm1.start();
        runAlgorithm2.start();
        runAlgorithm3.start();
        runAlgorithm4.start();
        runAlgorithm5.start();


        try{
            runAlgorithm.join();
            runAlgorithm1.join();
            runAlgorithm2.join();
            runAlgorithm3.join();
            runAlgorithm4.join();
            runAlgorithm5.join();
        }
        catch (InterruptedException e){
            e.printStackTrace();
        }

        double[] time = runAlgorithm.getPayload();
        double[] time1 = runAlgorithm1.getPayload();
        double[] time2 = runAlgorithm2.getPayload();
        double[] time3 = runAlgorithm3.getPayload();
        double[] time4 = runAlgorithm4.getPayload();
        double[] time5 = runAlgorithm5.getPayload();

        System.out.println("1000: " + time[0] + " " + time[1] + " " + time[2] + " " + time[3] + " " + time[4] );
        System.out.println("10000: " + time1[0] + " " + time1[1] + " " + time1[2] + " " + time1[3] + " " + time1[4]);
        System.out.println("50000: " + time2[0] + " " + time2[1] + " " + time2[2] + " " + time2[3] + " " + time2[4] );
        System.out.println("100000: " + time3[0] + " " + time3[1] + " " + time3[2] + " " + time3[3] + " " + time3[4] );
        System.out.println("500000: " + time4[0] + " " + time4[1] + " " + time4[2] + " " + time4[3] + " " + time4[4] );
        System.out.println("1000000: " + time5[0] + " " + time5[1] + " " + time5[2] + " " + time5[3] + " " + time5[4] );

        String j = " {\r\n    \"quick\": [\r\n        1627019,\r\n        5996459,\r\n        99881415,\r\n        297787269,\r\n        4825219824,\r\n        17058066979\r\n    ],\r\n    \"insertion\": [\r\n        1701467,\r\n        831693,\r\n        3721193,\r\n        144405,\r\n        297338,\r\n        563112\r\n    ],\r\n    \"bubble\": [\r\n        4851058,\r\n        41062243,\r\n        842172127,\r\n        2210393081,\r\n        38510318033,\r\n        152522200091\r\n    ],\r\n    \"merge\": [\r\n        1514317,\r\n        1410578,\r\n        41446650,\r\n        17173562,\r\n        55642207,\r\n        80102376\r\n    ],\r\n    \"radix\": [\r\n        391638,\r\n        4864941,\r\n        12020436,\r\n        10746868,\r\n        62473884,\r\n        129241924\r\n    ]\r\n}";


        String json = "{\"quick\": [" + time[0] + ", " + time1[0] + ", " + time2[0] + ", " + time3[0] + ", " + time4[0] + ", " + time5[0] + "] , \"insertion\": [" + time[1] + ", " + time1[1] + ", " + time2[1] + ", " + time3[1] + ", " + time4[1] + ", " + time5[1] + "] , \"bubble\": [" + time[2] + ", " + time1[2] + ", " + time2[2] + ", " + time3[2] + ", " + time4[2] + ", " + time5[2] + "] , \"merge\": [" + time[3] + ", " + time1[3] + ", " + time2[3] + ", " + time3[3] + ", " + time4[3] + ", " + time5[3] + "] , \"radix\": [" + time[4] + ", " + time1[4] + ", " + time2[4] + ", " + time3[4] + ", " + time4[4] + ", " + time5[4] + "]}";

        
       writer.printf(json);
       
  }
}
