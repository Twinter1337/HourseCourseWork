using System;
using System.IO;
using System.Windows.Documents;
using Newtonsoft.Json;

namespace CourseWork_1._0.Classes
{
    public class Product
    {
        //class fields
        private string _name;
        private double _price;
        private int _amount;

        //class properties
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public double Price
        {
            get { return _price; }
            set { _price = value; }
        }
        
        public int Amount
        {
            get { return _amount; }
            set { _amount = value; }
        }

        public Product()
        {
            //base constructor
            _name = "product";
            _price = 9999;
            _amount = 999;
        }

        public Product(string name, double price, int amount)
        {
            //constructor with parameters
            _name = name;
            _price = price;
            _amount = amount;
        }

        public Product(Product other)
        {
            //copy constructor
            _name = other.Name;
            _price = other.Price;
            _amount = other.Amount;
        }
    }
}