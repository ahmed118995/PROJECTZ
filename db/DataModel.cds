namespace HR.db;

entity EMP
{
    /**
     * Name
     */
    key ID : Integer;
    Name : String(150);
    Address : String(250);
    Job : String(100);
}
