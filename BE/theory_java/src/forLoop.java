public class forLoop {
    public static void main(String[] args) {
        // int i =0;
        // for(;i <5;i++) {
        //     i++;
        //     System.out.println(i);
        // }

        int[] array = {1,2,3,4,5,6,7,8};
        for(int item: array) {          // for each chỉ có thể dịch từ trên xuống dưới còn forloop có thể custom cách duyệt mảng
            System.out.println(item);
        }
    }
}
