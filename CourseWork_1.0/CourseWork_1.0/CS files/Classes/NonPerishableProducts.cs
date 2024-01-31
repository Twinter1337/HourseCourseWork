namespace CourseWork_1._0.Classes{
    public class NonPerishableProducts : Product{
        //class fields
        private string _material;

        //class properties
        public string Material { get; set; }

        public NonPerishableProducts() : base(){
            //base constructor
            _material = "Plastic";
        }

        public NonPerishableProducts(string name, string material, int price, int amount) : base(name, price, amount){
            //constructor with parameters
            _material = material;
        }

        public NonPerishableProducts(NonPerishableProducts other) : base(other.Name, other.Price, other.Amount){
            //copy constructor
            _material = other.Material;
        }
    }
}