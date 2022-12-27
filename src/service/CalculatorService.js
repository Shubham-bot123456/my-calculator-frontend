import axios from "axios";

class CalculatorService {
  getAnswer(string) {
    return axios.get(
      "https://my-calculator-backend-production.up.railway.app/calculate/" +
        string
    );
  }
}
export default new CalculatorService();
