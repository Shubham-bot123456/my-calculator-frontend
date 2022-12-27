import axios from "axios";

class CalculatorService {
  getAnswer(string) {
    return axios.get("http://localhost:8080/calculate/" + string);
  }
}
export default new CalculatorService();
