const { getPagination, getPagingData } = require('../Utils/index');
const productService = require('../Services/produceService');
const productServices = new productService();
class productController {


    static async getProductList(req, res) {

        const { page = 1, size = 20, query } = req.query;
        const { limit, offset } = getPagination(page, size);
        let filter = {};
        if (query) {
            filter = {
                $or: [
                    { name: { $regex: query, $options: "i" } },

                ],
            };
        }
        try {
            const totalCount = await productService.getProductCount(filter);
            // console.log(totalCount, filter, "ddddd")
            const getProductList = await productService.getProductsList(filter, limit, offset);
            const response = getPagingData(totalCount, page, limit, getProductList);
            return res.json({ error: false, msg: "OK", response });
            // console.log(getProductList);
        } catch (error) {
            console.log(error);
        }
    }


    static async getSingleProduct(req, response) {
        try {
            const id = req.params.id;
            const x = await productService.getProductById(id)
            console.log(x, "x")
            if (!x) {
                return response.status(404).json("Not Found");
            }

            return response.status(201).json(x);
        } catch (error) {
            console.log(error)
        }
    }
    static async newProduct(request, response) {
        try {


            const data = await productService.createProduct(request.body);
            // console.log(data)
            return response.status(201).json(data);

            // return response.json({error: false, msg: "OK", data})
        } catch (error) {
            // console.log(error);
            return response.status(400).json({ error: true, msg: error.message });
        }
    }

    static async updateProduct(req, response) {
        try {
            const id = req.params.id;
            const x = await productService.getProductById(id)
            if (!x) {
                return response.status(404).json("Not Found");
            }
            const data = await productService.updateProduct(req.body, x.id);
            return response.status(201).json(data);
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteProduct(req, response) {
        const id = req.params.id;
        const x = await productService.getProductById(id)
        if (!x) {
            return response.status(404).json("Not Found");
        }
        const k = await productService.deleteProduct(x.id)
        return response.status(202).json("Data delete Successfully")
    }

}
module.exports = productController