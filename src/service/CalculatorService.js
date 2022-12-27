import axios from "axios";

class CalculatorService {
  getAnswer(string) {
    console.log(string);
    return axios.post(
      "https://my-calculator-backend-production.up.railway.app/calculate",
      {
        inputString: string,
      }
    );
  }
}
export default new CalculatorService();
