import { Service } from "./service.js";

export class Controller {
    Constructor() {
        this.service = new Service()
    }
    async getFileStream(filename) {
        return this.service.getFileStream(filename);
    }
}