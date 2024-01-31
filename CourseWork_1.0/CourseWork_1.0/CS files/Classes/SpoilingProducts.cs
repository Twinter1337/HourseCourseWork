namespace CourseWork_1._0.Classes{
    public class SpoilingProducts : Product{
        //class fields
        private string _date;

        //class properties
        public string Date { get; set; }

        public SpoilingProducts() : base(){
            //base constructor
            _date = "00.00.0000 - 11.11.1111";
        }

        public SpoilingProducts(string name, string date, int price, int amount) : base(name, price, amount){
            //constructor with parameters
            _date = date;
        }

        public SpoilingProducts(SpoilingProducts other) : base(other.Name, other.Price, other.Amount){
            //copy constructor
            _date = other.Date;
        }
    }
}