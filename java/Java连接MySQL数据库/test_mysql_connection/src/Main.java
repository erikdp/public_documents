import java.io.FileReader;
import java.sql.*;
import java.util.Scanner;

public class Main
{
	public static void main(String args[])
	{
		try
		{
			Class.forName("com.mysql.jdbc.Driver"); // ����MYSQL JDBC��������
			// Class.forName("org.gjt.mm.mysql.Driver");
			System.out.println("Success loading Mysql Driver!");
		} catch (Exception e)
		{
			System.out.print("Error loading Mysql Driver!");
			e.printStackTrace();
		}
		try
		{
			FileReader fileReader = new FileReader("mysql.key");
			@SuppressWarnings("resource")
			Scanner scanner = new Scanner(fileReader);
			String strDatabaseName;
			String strUsrName;
			String strPassword;
			strDatabaseName = scanner.next();
			strUsrName      = scanner.next();
			strPassword     = scanner.next();
			Connection connect = DriverManager.getConnection(
					"jdbc:mysql://mysql-h.sourceforge.net:3306/" + strDatabaseName, strUsrName, strPassword);
			// ����URLΪ jdbc:mysql//��������ַ/���ݿ��� �������2�������ֱ��ǵ�½�û���������

			System.out.println("Success connect Mysql server!");
			Statement stmt = connect.createStatement();
			ResultSet rs = stmt.executeQuery("select * from city");
			// user Ϊ��������
			while (rs.next())
			{
				System.out.print(rs.getInt("ID") + " ");
				System.out.print(rs.getString("Name") + " ");
				System.out.print(rs.getString("CountryCode") + " ");
				System.out.print(rs.getString("District") + " ");
				System.out.println(rs.getString("Population"));
			}
		} catch (Exception e)
		{
			System.out.print("get data error!");
			e.printStackTrace();
		}
	}
}


