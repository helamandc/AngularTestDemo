export class CalculateComponent{

    result = 0;
    firstNumber = 20;
    secondNumber = 30;

    sum(){
        this.result = this.firstNumber + this.secondNumber;
    }

    multiply(){
        this.result = this.firstNumber * this.secondNumber;
    }

    subtract(){
        this.result = this.firstNumber - this.secondNumber;
    }

    divide(){
        this.result = this.firstNumber / this.secondNumber;
    }

}