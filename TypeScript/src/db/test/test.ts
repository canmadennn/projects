class MyClass {
    constructor(private data: string) {}

    getData(): string {
        return this.data;
    }
}

function createPromise(): Promise<MyClass> {
    return new Promise((resolve, reject) => {
        // Asenkron bir işlem simülasyonu
        setTimeout(() => {
            const myInstance = new MyClass("Sample Data");
            resolve(myInstance);
        }, 1000);
    });
}

// Promise'i kullanma
createPromise().then((result) => {
    console.log(result.getData()); // Sample Data
});



