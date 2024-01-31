using System;
using System.IO;
using System.Windows.Documents;
using Newtonsoft.Json;

namespace CourseWork_1._0.Classes{
    public class Product{
        //class fields
        private string _name;
        private int _price;
        private int _amount;

        //class properties
        public string Name { get; set; }
        public int Price { get; set; }
        public int Amount { get; set; }

        public Product(){
            //base constructor
            _name = "product";
            _price = 9999;
            _amount = 999;
        }

        public Product(string name, int price, int amount){
            //constructor with parameters
            _name = name;
            _price = price;
            _amount = amount;
        }

        public Product(Product other){
            //copy constructor
            _name = other.Name;
            _price = other.Price;
            _amount = other.Amount;
        }
    }
}