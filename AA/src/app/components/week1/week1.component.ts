import { Component, OnInit } from '@angular/core';
import fetch from 'node-fetch';
import * as utils from '/Angular/Angular-AHT/AA/src/app/modules/modules.module';

@Component({
  selector: 'app-week1',
  templateUrl: './week1.component.html',
  styleUrls: ['./week1.component.css'],
})
export class Week1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Ex 1:
    function sumArray(numbers: number[]): number {
      return numbers.reduce((a, b) => a + b);
    }

    let numbersArray: number[] = [1, 2, 3];
    let result: number = sumArray(numbersArray);

    console.log('Ex 1: ' + result);

    // ----------------------------------------------

    // Ex 2:
    interface Person {
      name: string;
      age: number;
      email: string;
    }
    function logPersonInfo(person: Person): void {
      console.log('Ex 2:');
      console.log(`Name: ${person.name}`);
      console.log(`Age: ${person.age}`);
      console.log(`Email: ${person.email}`);
    }
    let personInfo: Person = {
      name: 'Duc Thien',
      age: 24,
      email: 'phamthienduc069@gmail.com',
    };
    logPersonInfo(personInfo);

    // ----------------------------------------------

    // Ex 3: Generic function
    function genericFunc<T>(arg: T): T {
      return arg;
    }
    let arrayEx3 = genericFunc<string[]>(['First el', 'Second el', 'Third el']);
    console.log('Ex 3: ' + arrayEx3[0]);

    // ----------------------------------------------

    // Ex 4: enumeration
    enum Color {
      RED,
      GREEN,
      BLUE,
    }
    function enumFuncColor(color: Color): void {
      switch (color) {
        case Color.RED:
          console.log('Ex 4: Print RED');
          break;
        case Color.GREEN:
          console.log('Ex 4: Print GREEN');
          break;
        case Color.BLUE:
          console.log('Ex 4: Print BLUE');
          break;
        default:
          console.log('Unknown Color');
      }
    }
    enumFuncColor(Color.GREEN);

    // ----------------------------------------------

    // Ex 5:

    class Rectangle {
      private hight: number;
      private width: number;
      constructor(hight: number, width: number) {
        this.hight = hight;
        this.width = width;
      }
      calculateArea() {
        return this.hight * this.width;
      }
    }
    let myRectangle = new Rectangle(5, 10);
    let area = myRectangle.calculateArea();
    console.log(`Ex 5 : Diện tích của hình chữ nhật là: ${area}`);

    // ----------------------------------------------

    // Ex 6:

    function logMethod(
      target: any,
      key: string,
      descriptor: PropertyDescriptor
    ) {
      const originalMethod = descriptor.value;

      descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result;
      };

      return descriptor;
    }

    class ExampleClass {
      @logMethod
      exampleMethod(message: string): void {
        console.log(
          `Ex 6 : Thông tin của phương thức được gọi trong lớp: ${message}`
        );
      }
    }
    const exampleInstance = new ExampleClass();
    exampleInstance.exampleMethod('Hello World!');

    // ----------------------------------------------

    // Ex 7:

    // post 7

<<<<<<< HEAD
    // function fetchDataFromAPI(apiURL: string): Promise<any> {
    //   return new Promise((resolve, reject) => {
    //     fetch(apiURL)
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error(
    //             `Error ${response.status}: ${response.statusText}`
    //           );
=======
    // function fetchDataFromApi() {
    //   return new Promise((resolve, reject) => {
    //     fetch("http://localhost:3333/posts")
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error(`HTTP error! Status: ${response.status}`);
>>>>>>> b47b1864d11aec365def08bd92aa98817ce1045f
    //         }
    //         return response.json();
    //       })
    //       .then((data) => {
    //         resolve(data);
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   });
    // }
<<<<<<< HEAD
    // const apiUrl = 'http://localhost:3000/user';

    // fetchDataFromAPI(apiUrl)
    //   .then((data) => {
    //     console.log('Dữ liệu từ API:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Lỗi khi gọi API:', error);
=======
    
    // fetchDataFromApi()
    //   .then((data) => {
    //     console.log("Data from API:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
>>>>>>> b47b1864d11aec365def08bd92aa98817ce1045f
    //   });

    // ----------------------------------------------

    // Ex 8:
    let num = 5;
    console.log(`Ex 8 : Giai thừa của ${num}: ${utils.factorial(num)}`);

    let primeNumber = 11;
    console.log(
      `${primeNumber} là số nguyên tố: ${utils.isPrime(primeNumber)}`
    );

    // ----------------------------------------------

    // Ex 9:
    type Product = {
      id: number;
      name: string;
      price: number;
      quantity: number;
    };
    // 1,
    let productsList: Product[] = [
      { id: 1, name: 'Product 1', price: 10.99, quantity: 50 },
      { id: 2, name: 'Product 2', price: 20.49, quantity: 30 },
      { id: 3, name: 'Product 3', price: 5.99, quantity: 100 },
      { id: 4, name: 'Product 4', price: 15.29, quantity: 25 },
      { id: 5, name: 'Product 5', price: 100.99, quantity: 75 },
    ];

    console.log('Ex 9.1 : Danh sách sản phẩm:');
    productsList.forEach((product) => {
      console.log(
        `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`
      );
    });

    // 2,
    let totalValueProducts = productsList.reduce((hi, product) => {
      return hi + product.price * product.quantity;
    }, 0);

    console.log(
      `9.2 : Tổng giá trị của tất cả sản phẩm: ${totalValueProducts}`
    );

    // 3,
    const expensiveProducts = productsList.filter(
      (product) => product.price > 100
    );

    expensiveProducts.forEach((product) => {
      console.log('9.3 : Sản phẩm có giá lớn hơn 100: ' + product.name);
    });

    // 4,
    const productDescriptions = productsList.map((product) => {
      return `9.4 : Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`;
    });
    productDescriptions.forEach((description) => {
      console.log(description);
    });

    // 5,
    const totalQuantityUnder100 = productsList.reduce((sum, product) => {
      if (product.price < 100) {
        return sum + product.quantity;
      }
      return sum;
    }, 0);

    console.log(
      `9.5 : Tổng số lượng của các sản phẩm có giá dưới 100: ${totalQuantityUnder100} sản phẩm`
    );

    // 6,
    function getDiscountedProducts(
      productsList: Product[],
      discountRate: number
    ): Product[] {
      const discountedProducts = productsList.map((product) => {
        const discountedPrice = product.price * (1 - discountRate);
        return { ...product, price: discountedPrice };
      });

      return discountedProducts;
    }
    const discountRate = 0.1;
    const discountedProducts = getDiscountedProducts(
      productsList,
      discountRate
    );

    console.log('9.6 : Danh sách sản phẩm sau khi giảm giá:');
    discountedProducts.forEach((product) => {
      console.log(
        `ID: ${product.id}, Name: ${product.name}, Discounted Price: ${product.price}`
      );
    });

    // ----------------------------------------------

    // Ex 10:
  }
}
