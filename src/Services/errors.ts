export class NoAccessKeyError extends Error {
    constructor() {
        super();
        this.message = "No unsplash access key found!!!";
    }
}
