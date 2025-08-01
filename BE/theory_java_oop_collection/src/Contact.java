public class Contact {
     private int id;
    private String name;
    private String phone;
    private String email;
    private String address;

    public Contact(int id, String name, String phone, String email, String address) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    public int getId() { return id; }
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
        return String.format("ID: %d | Name: %s | Phone: %s | Email: %s | Address: %s",
                id, name, phone, email, address);
    }
}
