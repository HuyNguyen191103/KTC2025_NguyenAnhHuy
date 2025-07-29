import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class Lab16 {
     private static ArrayList<Contact> contacts = new ArrayList<>();
    private static int idCounter = 1;
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            showMenu();
            String choice = scanner.nextLine();
            switch (choice) {
                case "1":
                    showContacts();
                    break;
                case "2":
                    searchByPhone();
                    break;
                case "3":
                    addContact();
                    break;
                case "4":
                    editContact();
                    break;
                case "5":
                    deleteContact();
                    break;
                default:
                    System.out.println("Cảm ơn bạn đã sử dụng chương trình!");
                    return;
            }
        }
    }

    private static void showMenu() {
        System.out.println("\n=== MENU QUẢN LÝ DANH BẠ ===");
        System.out.println("1. Hiển thị danh sách liên lạc");
        System.out.println("2. Tìm kiếm liên lạc theo số điện thoại");
        System.out.println("3. Thêm mới liên lạc");
        System.out.println("4. Sửa thông tin liên lạc");
        System.out.println("5. Xóa thông tin liên lạc");
        System.out.print("=> Mời bạn chọn chức năng [1->5] hoặc nhấn phím khác để thoát: ");
    }

    private static void showContacts() {
        if (contacts.isEmpty()) {
            System.out.println("Danh sách liên lạc trống.");
            return;
        }
        System.out.println("\n=== DANH SÁCH LIÊN LẠC ===");
        for (Contact contact : contacts) {
            System.out.println(contact);
        }
    }

    private static void searchByPhone() {
        System.out.print("Nhập số điện thoại cần tìm: ");
        String phone = scanner.nextLine();
        for (Contact contact : contacts) {
            if (contact.getPhone().equals(phone)) {
                System.out.println("Tìm thấy: " + contact);
                return;
            }
        }
        System.out.println("Không tìm thấy liên lạc với số điện thoại: " + phone);
    }

private static void addContact() {
    System.out.print("Nhập tên: ");
    String name = scanner.nextLine().trim();

    System.out.print("Nhập số điện thoại: ");
    String phone = scanner.nextLine().trim();

    // Kiểm tra số điện thoại chỉ chứa số
    if (!phone.matches("\\d+")) {
        System.out.println("Số điện thoại không hợp lệ. Chỉ được chứa chữ số.");
        return;
    }

    // Kiểm tra số điện thoại đã tồn tại chưa
    for (Contact c : contacts) {
        if (c.getPhone().equals(phone)) {
            System.out.println("Số điện thoại đã tồn tại trong danh bạ.");
            return;
        }
    }

    System.out.print("Nhập email: ");
    String email = scanner.nextLine().trim();
    System.out.print("Nhập địa chỉ: ");
    String address = scanner.nextLine().trim();

    Contact newContact = new Contact(idCounter++, name, phone, email, address);
    contacts.add(newContact);
    System.out.println("Thêm liên lạc thành công!");
}

private static void editContact() {
    System.out.print("Nhập số điện thoại của liên lạc cần sửa: ");
    String oldPhone = scanner.nextLine().trim();

    for (Contact contact : contacts) {
        if (contact.getPhone().equals(oldPhone)) {
            System.out.print("Nhập tên mới: ");
            contact.setName(scanner.nextLine().trim());

            System.out.print("Nhập số điện thoại mới: ");
            String newPhone = scanner.nextLine().trim();

            if (!newPhone.matches("\\d+")) {
                System.out.println("Số điện thoại không hợp lệ. Chỉ được chứa chữ số.");
                return;
            }

            // Kiểm tra nếu số điện thoại mới đã tồn tại (trừ chính liên lạc đang sửa)
            for (Contact c : contacts) {
                if (!c.equals(contact) && c.getPhone().equals(newPhone)) {
                    System.out.println("Số điện thoại đã tồn tại trong danh bạ.");
                    return;
                }
            }

            contact.setPhone(newPhone);

            System.out.print("Nhập email mới: ");
            contact.setEmail(scanner.nextLine().trim());

            System.out.print("Nhập địa chỉ mới: ");
            contact.setAddress(scanner.nextLine().trim());

            System.out.println("Cập nhật thành công!");
            return;
        }
    }

    System.out.println("Không tìm thấy liên lạc với số điện thoại: " + oldPhone);
}

    private static void deleteContact() {
        System.out.print("Nhập số điện thoại của liên lạc cần xóa: ");
        String phone = scanner.nextLine();
        Iterator<Contact> iterator = contacts.iterator();
        while (iterator.hasNext()) {
            Contact contact = iterator.next();
        if (contact.getPhone().equals(phone)) {
            iterator.remove();
            System.out.println("Xóa liên lạc thành công!");
            return;
        }
    }
    System.out.println("Không tìm thấy liên lạc với số điện thoại: " + phone);
}
    
}
