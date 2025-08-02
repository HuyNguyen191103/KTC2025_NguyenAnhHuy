import java.util.*;

class Contact {
    private String id;
    private String name;
    private String phone;
    private String email;
    private String address;

    public Contact(String id, String name, String phone, String email, String address) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public String getPhone() { return phone; }
    public String getEmail() { return email; }
    public String getAddress() { return address; }

    public void setName(String name) { this.name = name; }
    public void setPhone(String phone) { this.phone = phone; }
    public void setEmail(String email) { this.email = email; }
    public void setAddress(String address) { this.address = address; }

    @Override
    public String toString() {
        return String.format("ID: %s | Name: %s | Phone: %s | Email: %s | Address: %s", id, name, phone, email, address);
    }
}

public class Lab17 {
    private static final Scanner scanner = new Scanner(System.in);
    private static final List<Contact> contacts = new ArrayList<>();

    public static void main(String[] args) {
        while (true) {
            System.out.println("\n===== MENU =====");
            System.out.println("1. Hiển thị danh sách liên lạc");
            System.out.println("2. Tìm kiếm liên lạc theo mã liên lạc");
            System.out.println("3. Thêm mới liên lạc");
            System.out.println("4. Sửa thông tin liên lạc");
            System.out.println("5. Xóa thông tin liên lạc");
            System.out.print("=> Mời bạn chọn chức năng [1->5] hoặc nhấn phím khác để thoát: ");

            String choice = scanner.nextLine();
            switch (choice) {
                case "1" -> showAllContacts();
                case "2" -> searchContactById();
                case "3" -> addContact();
                case "4" -> editContact();
                case "5" -> deleteContact();
                default -> {
                    System.out.println("\nCảm ơn bạn đã dùng chương trình!");
                    return;
                }
            }
        }
    }

    private static void showAllContacts() {
        if (contacts.isEmpty()) {
            System.out.println("Không có liên lạc nào!");
        } else {
            contacts.forEach(System.out::println);
        }
    }

    private static void searchContactById() {
        System.out.print("Nhập mã liên lạc cần tìm: ");
        String id = scanner.nextLine();
        Contact contact = findContactById(id);
        if (contact != null) {
            System.out.println(contact);
        } else {
            System.out.println("Không tìm thấy liên lạc với ID: " + id);
        }
    }

    private static void addContact() {
        System.out.print("Nhập ID: ");
        String id = scanner.nextLine();
        if (findContactById(id) != null) {
            System.out.println("ID đã tồn tại!");
            return;
        }
        System.out.print("Nhập tên: ");
        String name = scanner.nextLine();
        System.out.print("Nhập số điện thoại: ");
        String phone = scanner.nextLine();
        System.out.print("Nhập email: ");
        String email = scanner.nextLine();
        System.out.print("Nhập địa chỉ: ");
        String address = scanner.nextLine();

        contacts.add(new Contact(id, name, phone, email, address));
        System.out.println("Thêm liên lạc thành công!");
    }

    private static void editContact() {
        System.out.print("Nhập ID liên lạc cần sửa: ");
        String id = scanner.nextLine();
        Contact contact = findContactById(id);
        if (contact == null) {
            System.out.println("Không tìm thấy liên lạc!");
            return;
        }
        System.out.print("Nhập tên mới: ");
        contact.setName(scanner.nextLine());
        System.out.print("Nhập số điện thoại mới: ");
        contact.setPhone(scanner.nextLine());
        System.out.print("Nhập email mới: ");
        contact.setEmail(scanner.nextLine());
        System.out.print("Nhập địa chỉ mới: ");
        contact.setAddress(scanner.nextLine());
        System.out.println("Cập nhật thành công!");
    }

    private static void deleteContact() {
        System.out.print("Nhập ID liên lạc cần xóa: ");
        String id = scanner.nextLine();
        Contact contact = findContactById(id);
        if (contact != null) {
            contacts.remove(contact);
            System.out.println("Đã xóa liên lạc thành công!");
        } else {
            System.out.println("Không tìm thấy liên lạc!");
        }
    }

    private static Contact findContactById(String id) {
        return contacts.stream()
                .filter(c -> c.getId().equalsIgnoreCase(id))
                .findFirst()
                .orElse(null);
    }
}