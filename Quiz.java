import java.util.Scanner;

public class Quiz {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int score = 0;

        System.out.println("================================");
        System.out.println("       JAVA QUIZ APPLICATION     ");
        System.out.println("================================");

        // Question 1
        System.out.println("\n1. Which keyword is used to create a class in Java?");
        System.out.println("1. function");
        System.out.println("2. class");
        System.out.println("3. define");
        System.out.println("4. create");

        System.out.print("Enter your answer: ");
        int answer = sc.nextInt();

        if (answer == 2) {
            System.out.println("Excellent");
            score++;
        } else {
            System.out.println("Wrong! Correct answer is 2.");
        }

        // Question 2
        System.out.println("\n2. Which method is the starting point of a Java program?");
        System.out.println("1. start()");
        System.out.println("2. run()");
        System.out.println("3. main()");
        System.out.println("4. execute()");

        System.out.print("Enter your answer: ");
        answer = sc.nextInt();

        if (answer == 3) {
            System.out.println("Horray");
            score++;
        } else {
            System.out.println("Wrong! Correct answer is 3.");
        }

        // Question 3
        System.out.println("\n3. Which keyword is used to create an object?");
        System.out.println("1. object");
        System.out.println("2. create");
        System.out.println("3. new");
        System.out.println("4. class");

        System.out.print("Enter your answer: ");
        answer = sc.nextInt();

        if (answer == 3) {
            System.out.println("Well Done!");
            score++;
        } else {
            System.out.println("Wrong! Correct answer is 3.");
        }

        // Question 4
        System.out.println("\n4. Which data type is used to store whole numbers?");
        System.out.println("1. float");
        System.out.println("2. String");
        System.out.println("3. boolean");
        System.out.println("4. int");

        System.out.print("Enter your answer: ");
        answer = sc.nextInt();

        if (answer == 4) {
            System.out.println("Wow!");
            score++;
        } else {
            System.out.println("Wrong! Correct answer is 4.");
        }

        // Question 5
        System.out.println("\n5. Which symbol is used to end a statement in Java?");
        System.out.println("1. .");
        System.out.println("2. ;");
        System.out.println("3. :");
        System.out.println("4. ,");

        System.out.print("Enter your answer: ");
        answer = sc.nextInt();

        if (answer == 2) {
            System.out.println("Fantastic");
            score++;
        } else {
            System.out.println("Wrong! Correct answer is 2.");
        }

        // Result
        double percentage = (score / 5.0) * 100;

        System.out.println("\n================================");
        System.out.println("             RESULT             ");
        System.out.println("================================");
        System.out.println("Score      : " + score + "/5");
        System.out.println("Percentage : " + percentage + "%");

        if (score == 5) {
            System.out.println("Excellent!");
        } else if (score >= 3) {
            System.out.println("Good job!");
        } else {
            System.out.println("Keep practicing!");
        }

        System.out.println("================================");

        sc.close();
    }
}