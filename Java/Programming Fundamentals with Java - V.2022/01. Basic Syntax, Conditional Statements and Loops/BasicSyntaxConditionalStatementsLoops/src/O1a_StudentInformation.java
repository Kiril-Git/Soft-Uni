import java.util.Scanner;

public class O1a_StudentInformation {

        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            String name = scanner.nextLine();
            int age = Integer.parseInt(scanner.nextLine());
            double grade = Double.parseDouble(scanner.nextLine());

            String result = String.format("Name: %s, Age: %d, Grade: %.2f", name, age, grade);

            System.out.printf(result);
    }
}
