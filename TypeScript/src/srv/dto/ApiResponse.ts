export class ApiResponse {
    status : number | string | undefined;
    message : string;
    data : Object | undefined;
    constructor() {
        this.status = 200;
        this.message = "Success";
        this.data = {};
    }
}