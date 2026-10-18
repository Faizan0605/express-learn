
async function submitHandler(e) {
    e.preventDefault();
    const productName = e.target.productName.value;

    const obj = {
        productName
    }

    try {
        const res = await axios.post("http://localhost:4000/products", obj);
        console.log(res.data.value);
    } catch (error) {
        console.error("Error submitting product:", error);
    }
}