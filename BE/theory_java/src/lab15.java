import java.util.Scanner;

public class lab15 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double electricityBill = 0;
        double taxiBill = 0;
        double salary = 0;

        while (true) {
            System.out.println("------ MENU ------");
            System.out.println("1. Tính tiền điện cuối tháng");
            System.out.println("2. Tính tiền taxi cuối tháng (đi 1 lần/tháng)");
            System.out.println("3. Tính tiền lương cuối tháng (thuế = 15%)");
            System.out.println("4. Tính tổng thu nhập sau khi chi tiêu cuối tháng");
            System.out.print("=> Mời bạn chọn chức năng [1->4] hoặc nhấn phím khác để thoát: ");

            String choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    System.out.print("Nhập số kWh đã dùng: ");
                    double kwh = Double.parseDouble(scanner.nextLine());
                    System.out.print("Nhập đơn giá (đồng/kWh): ");
                    double unitPrice = Double.parseDouble(scanner.nextLine());
                    electricityBill = kwh * unitPrice;
                    System.out.println("=> Tiền điện cuối tháng: " + electricityBill + " đồng\n");
                    break;

                case "2":
                    System.out.print("Nhập số km cho 1 lần đi taxi: ");
                    double km = Double.parseDouble(scanner.nextLine());
                    System.out.print("Nhập giá/km: ");
                    double pricePerKm = Double.parseDouble(scanner.nextLine());
                    taxiBill = km * pricePerKm;
                    System.out.println("=> Tiền taxi cuối tháng: " + taxiBill + " đồng\n");
                    break;

                case "3":
                    System.out.print("Nhập lương trước thuế: ");
                    double grossSalary = Double.parseDouble(scanner.nextLine());
                    salary = grossSalary * 0.85;
                    System.out.println("=> Lương sau thuế: " + salary + " đồng\n");
                    break;

                case "4":
                    double netIncome = salary - electricityBill - taxiBill;
                    System.out.println("=> Tổng thu nhập còn lại sau chi tiêu: " + netIncome + " đồng\n");
                    break;

                default:
                    System.out.println("Cảm ơn bạn đã sử dụng chương trình!");
                    scanner.close();
                    return;
            }
        }
    }
    
}
