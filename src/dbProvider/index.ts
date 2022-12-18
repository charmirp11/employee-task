import { Db, MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

export default class DBProvider {
  public static db: Db;
  public static con: MongoClient;
  public static mongoServer: any;
  public static async getInstance(): Promise<any> {
    try {
      if (!DBProvider.db) {
        DBProvider.mongoServer = new MongoMemoryServer({
          instance: { dbName: 'employee' },
        });
        const mongoURL = await DBProvider.mongoServer.getUri();
        DBProvider.con = await MongoClient.connect(mongoURL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        DBProvider.db = DBProvider.con.db('employee');
        await DBProvider.db.createCollection('EmployeeDetails');
      }
      return {
        db: DBProvider.db,
        mongoServer: DBProvider.mongoServer,
        con: DBProvider.con,
      };
    } catch (e) {
      throw e;
    }
  }

  public static async destroy() {
    if (DBProvider.con) {
        await DBProvider.mongoServer.stop();
      await DBProvider.con.close();
    }
  }
}
