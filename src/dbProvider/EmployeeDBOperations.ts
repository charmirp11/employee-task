import DBProvider from '.';

class EmployeeDBOperations {
  public async insert(data: any) {
      const { db } = await DBProvider.getInstance();
      const collection = await db.collection('EmployeeDetails');
      await collection.insertOne(data);
      return { message: 'Employee Details Inserted SuccessFully!!' };
  }

  public async fetchAllEmployees() {
      const { db } = await DBProvider.getInstance();
      const collection = await db.collection('EmployeeDetails');
      const result = await collection.find().toArray();
      return result;
  }
}
const employeeDBOperations = new EmployeeDBOperations();
export default employeeDBOperations;
